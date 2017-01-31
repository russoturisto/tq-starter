import {dbConst, Entity, ManyToOne, Id, OneToMany} from 'tarmaq';
import {GoalApi} from "./goal";

/**
 * Created by Papa on 1/21/2017.
 */
@Entity({
  databases: [dbConst.ALL_DBS]
})
export class Task {
  complete: boolean;
  description: string;
  @ManyToOne()
  goal: GoalApi;
  @Id()
  taskId: number;
  name: string;
  @ManyToOne()
  nextTask?: Task;
  @OneToMany({mappedBy: 'nextTask'})
  previousTasks?: Task[];
}
