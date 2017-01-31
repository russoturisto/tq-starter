
import {TQ, IQEntityInternal, JoinType,
		IEntity, QEntity, IEntityDatabaseFacade,
		IQBooleanField, QBooleanField,
		IQDateField, QDateField,
		IQNumberField, QNumberField,
		IQStringField, QStringField,
		QOneToManyRelation, IQOneToManyRelation,
		IQNumberManyToOneRelation, QNumberManyToOneRelation,
		IQStringManyToOneRelation, QStringManyToOneRelation,
		RawUpdate, RawDelete,
    IEntityFind, IEntityFindOne,
    IEntitySearch, IEntitySearchOne,
    IGroup, IEntityWholeDatabaseFacade} from 'tarmaq';
import {Task} from '../../../model/task';
import {Goal} from '../../../model/goal';
import {IQGoal, QGoal} from './qgoal';

declare function require(moduleName: string): any;

//Entity Query
export interface IQTask
    extends IEntity
{
		// Properties
    complete?: boolean;
    description?: string;
    taskId?: number;
    name?: string;

		// Relations
    goal?: IQGoal
    nextTask?: IQTask
    previousTasks?: IQTask

}


// Entity Query Implementation
export class QTask extends QEntity
{
	static db(
		databaseName?: string
	): IEntityWholeDatabaseFacade<Task, IQTask, QTask> {
		databaseName = QEntity.getDatabaseName(Task, databaseName);
		return <IEntityWholeDatabaseFacade<Task, IQTask, QTask>>TQ.db(databaseName).getEntityFacade<Task, IQTask, QTask>(Task, QTask, 'Task');
	}

	static group(
		...groups: (string|IGroup)[]
	): IEntityDatabaseFacade<Task, IQTask, QTask> {
		return this.groups(groups);
	}

	static groups(
		groups: (string|IGroup)[]
	): IEntityDatabaseFacade<Task, IQTask, QTask> {
		return this.db().groups(groups);
	}
	
	static get find():IEntityFind<Task, IQTask> {
		return this.db().find;
	}
	
	static get findOne():IEntityFindOne<Task, IQTask> {
		return this.db().findOne;
	}
	
	static get search():IEntitySearch<Task, IQTask> {
		return this.db().search;
	}
	
	static get searchOne():IEntitySearchOne<Task, IQTask> {
		return this.db().searchOne;
	}

	static async create(
		entity: Task
	):Promise<Task> {
			return await this.db().create(entity);
	}

	static async update(
		entity: Task
	):Promise<Task> {
			return await this.db().update(entity);
	}
	
	static async updateWhere(
		rawUpdate: RawUpdate<IQTask, QTask> | {( ...args: any[] ) : RawUpdate<IQTask, QTask>},
	): Promise<void> {
		return await this.db().updateWhere(rawUpdate);
	}

	static async delete(
		entity: Task,
	):Promise<Task> {
			return await this.db().delete(entity);
	}
	
	static async deleteWhere(
		rawDelete: RawDelete<QTask> | {( ...args: any[] ) : RawDelete<QTask>},
	): Promise<void> {
		return await this.db().deleteWhere(rawDelete);
	}

	static async save(
		entity: Task,
	):Promise<Task> {
			return await this.db().save(entity);
	}

	static from():QTask {
			return this.db().from();
	}

	// Fields
	complete: IQBooleanField;
	description: IQStringField;
	taskId: IQNumberField;
	name: IQStringField;

	// Relations
	goal: IQNumberManyToOneRelation<QGoal>;
	nextTask: IQNumberManyToOneRelation<QTask>;
	previousTasks: IQOneToManyRelation<QTask>;

	constructor(
		qEntityConstructor: new( ...args: any[] ) => IQEntityInternal,
		entityConstructor: {new(): any},
	  entityName: string,
		fromClausePosition?: number[],
		relationPropertyName?:string,
		joinType?: JoinType
	) {
		super(qEntityConstructor, entityConstructor, entityName, fromClausePosition, relationPropertyName, joinType);
	  this.complete = new QBooleanField(this, qEntityConstructor, entityName, 'complete');
	  this.description = new QStringField(this, qEntityConstructor, entityName, 'description');
	  this.taskId = new QNumberField(this, qEntityConstructor, entityName, 'taskId');
	  this.name = new QStringField(this, qEntityConstructor, entityName, 'name');

	  
		let GoalClass: typeof Goal = require('../../../model/goal').Goal;
		let QGoalClass: typeof QGoal = require('./qgoal').QGoal;
		this.goal = new QNumberManyToOneRelation<Goal, QGoal>(this, qEntityConstructor, entityName, 'goal', 'Goal', GoalClass, QGoalClass);
	  
		let TaskClass: typeof Task = require('undefined').Task;
		let QTaskClass: typeof QTask = require('undefined').QTask;
		this.nextTask = new QNumberManyToOneRelation<Task, QTask>(this, qEntityConstructor, entityName, 'nextTask', 'Task', TaskClass, QTaskClass);
	  
		this.previousTasks = new QOneToManyRelation(this, qEntityConstructor, entityName, 'previousTasks', 'Task', TaskClass, QTaskClass);

	}

}

TQ.addQEntity(Task, QTask);
