import {Injectable} from "@angular/core";
import {TQService} from "./TQService";
import {GoalRepository} from "../db/GoalRepository";
import {Goal} from "../model/goal";
/**
 * Created by Papa on 1/29/2017.
 */

@Injectable()
export class GoalsService {

  constructor(
    private tqService: TQService,
    private goalRepo: GoalRepository
  ) {
    tqService.initializeTQ()
      .then()
      .catch((error) => {
        console.log(error);
      });
  }

  async getAllGoals():Promise<Goal[]> {
    return await this.goalRepo.findAll();
  }

  async addGoal(
    goal:Goal
  ) {
    await this.goalRepo.addGoal(goal);
  }

}
