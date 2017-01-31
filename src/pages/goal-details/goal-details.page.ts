import {Component, OnInit} from '@angular/core';
import {GoalApi, Goal} from "../../app/model/goal";
import {NgForm} from "@angular/forms";
import {InputFormPage} from "../../app/components/input-form/input-form.page";

@Component({
  selector: 'app-goal-details',
  templateUrl: 'goal-details.page.html'
})
export class GoalDetailsPage extends InputFormPage<Goal, any> implements OnInit {

  goal: GoalApi = {
    goalId: null,
    accomplished: false
  };

  constructor() {
    super();
  }

  ngOnInit() {
  }

  async doSubmit(
    goalForm: NgForm
  ) {
    console.log(this.goal);
  }

}
