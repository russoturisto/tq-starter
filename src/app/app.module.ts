import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {GoalsPage} from "../pages/goals/goals.page";
import {GoalDetailsPage} from "../pages/goal-details/goal-details.page";
import {PageHeaderComponent} from "./components/page-header/page-header.component";

@NgModule({
  declarations: [
    MyApp,
    GoalsPage,
    GoalDetailsPage,
    PageHeaderComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GoalDetailsPage,
    GoalsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
