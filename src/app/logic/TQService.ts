import {Injectable} from "@angular/core";
import {dbConst, DistributionStrategy, PlatformType, TQ, PersistenceConfig, StoreType} from "tarmaq";
/**
 * Created by Papa on 1/29/2017.
 */

@Injectable()
export class TQService {

  constructor() {
    //
  }

  async initializeTQ(
    databaseName: string = dbConst.DEFAULT_DB,
    platformType: PlatformType = PlatformType.STUB
  ) {
    if (TQ.isInitialized(databaseName)) {
      return;
    }
    await TQ.init(
      PersistenceConfig.getDefaultJsonConfig('TestApp'
        , DistributionStrategy.S3_DISTIBUTED_PUSH, platformType,
        StoreType.SQLJS, StoreType.SQLJS)
      , databaseName);
    await TQ.db(databaseName).entityManager.goOnline();
  }


}
