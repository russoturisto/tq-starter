import {Task} from "./task";
import {CascadeType, dbConst, Entity, Id, OneToMany} from "tarmaq";
/**
 * Created by Papa on 1/21/2017.
 */

export interface GoalApi {
  accomplished?: boolean;
  description?: string;
  goalId: number;
  name?: string;
  dueDate?: Date;
  tasks?: Task[];
}

@Entity({
  databases: [dbConst.ALL_DBS]
})
export class Goal implements GoalApi {
  accomplished: boolean;
  description: string;
  @Id()
  goalId: number;
  name: string;
  dueDate: Date;
  @OneToMany({mappedBy: 'goal', cascade: CascadeType.ALL})
  tasks?: Task[];
}
