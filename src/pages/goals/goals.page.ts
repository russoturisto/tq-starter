import {Component} from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';
import {GoalApi} from "../../app/model/goal";
import {GoalDetailsPage} from "../goal-details/goal-details.page";

@Component({
  selector: 'page-goal',
  templateUrl: 'goals.page.html'
})
export class GoalsPage {

  selectedGoal: GoalApi;
  icons: string[];
  goals: Array<GoalApi>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedGoal = navParams.get('goal');


  }

  goalTapped(
    event,
    goal: GoalApi
  ) {
    //
  }

  addGoal(): void {
    this.navCtrl.push(GoalDetailsPage);
  }
}
