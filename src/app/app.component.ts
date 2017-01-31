import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';

import {GoalsPage} from "../pages/goals/goals.page";
import {GoalDetailsPage} from "../pages/goal-details/goal-details.page";
import {dbConst, DistributionStrategy, TQ, PersistenceConfig, PlatformType, StoreType} from "tarmaq";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = GoalsPage;

  pages: Array<{title: string, component: any}>;

  constructor( public platform: Platform ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Create Goal', component: GoalDetailsPage},
      {title: 'Goals', component: GoalsPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.initializeTQ().then();
    });
  }

  openPage( page ) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  async initializeTQ(
    databaseName: string = dbConst.DEFAULT_DB,
    platformType: PlatformType = PlatformType.STUB
  ) {
    try {
      if (TQ.isInitialized(databaseName)) {
        return;
      }
      await
        TQ.init(PersistenceConfig.getDefaultJsonConfig('TQ-Starter'
          , DistributionStrategy.S3_DISTIBUTED_PUSH, platformType, StoreType.SQLJS, StoreType.SQLJS)
          , databaseName);
      await
        TQ.db(databaseName).entityManager.goOnline();
    } catch (error) {
      console.log(error);
    }
  }
}
