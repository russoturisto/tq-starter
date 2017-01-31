import {QGoal} from "../generated/app/model/qgoal";
import {Goal} from "../model/goal";
import {Injectable} from "@angular/core";
/**
 * Created by Papa on 1/29/2017.
 */

@Injectable()
export class GoalRepository {

  async findAll():Promise<Goal[]> {
    return await QGoal.find.graph({
      select: {}
    });
  }

  async addGoal(
    goal:Goal
  ) {
    await QGoal.create(goal);
  }

}
