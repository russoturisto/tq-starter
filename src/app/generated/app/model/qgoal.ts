
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
import {Goal} from '../../../model/goal';
import {Task} from '../../../model/task';
import {IQTask, QTask} from './qtask';

declare function require(moduleName: string): any;

//Entity Query
export interface IQGoal
    extends IEntity
{
		// Properties
    accomplished?: boolean;
    description?: string;
    goalId?: number;
    name?: string;
    dueDate?: Date;

		// Relations
    tasks?: IQTask

}


// Entity Query Implementation
export class QGoal extends QEntity
{
	static db(
		databaseName?: string
	): IEntityWholeDatabaseFacade<Goal, IQGoal, QGoal> {
		databaseName = QEntity.getDatabaseName(Goal, databaseName);
		return <IEntityWholeDatabaseFacade<Goal, IQGoal, QGoal>>TQ.db(databaseName).getEntityFacade<Goal, IQGoal, QGoal>(Goal, QGoal, 'Goal');
	}

	static group(
		...groups: (string|IGroup)[]
	): IEntityDatabaseFacade<Goal, IQGoal, QGoal> {
		return this.groups(groups);
	}

	static groups(
		groups: (string|IGroup)[]
	): IEntityDatabaseFacade<Goal, IQGoal, QGoal> {
		return this.db().groups(groups);
	}
	
	static get find():IEntityFind<Goal, IQGoal> {
		return this.db().find;
	}
	
	static get findOne():IEntityFindOne<Goal, IQGoal> {
		return this.db().findOne;
	}
	
	static get search():IEntitySearch<Goal, IQGoal> {
		return this.db().search;
	}
	
	static get searchOne():IEntitySearchOne<Goal, IQGoal> {
		return this.db().searchOne;
	}

	static async create(
		entity: Goal
	):Promise<Goal> {
			return await this.db().create(entity);
	}

	static async update(
		entity: Goal
	):Promise<Goal> {
			return await this.db().update(entity);
	}
	
	static async updateWhere(
		rawUpdate: RawUpdate<IQGoal, QGoal> | {( ...args: any[] ) : RawUpdate<IQGoal, QGoal>},
	): Promise<void> {
		return await this.db().updateWhere(rawUpdate);
	}

	static async delete(
		entity: Goal,
	):Promise<Goal> {
			return await this.db().delete(entity);
	}
	
	static async deleteWhere(
		rawDelete: RawDelete<QGoal> | {( ...args: any[] ) : RawDelete<QGoal>},
	): Promise<void> {
		return await this.db().deleteWhere(rawDelete);
	}

	static async save(
		entity: Goal,
	):Promise<Goal> {
			return await this.db().save(entity);
	}

	static from():QGoal {
			return this.db().from();
	}

	// Fields
	accomplished: IQBooleanField;
	description: IQStringField;
	goalId: IQNumberField;
	name: IQStringField;
	dueDate: IQDateField;

	// Relations
	tasks: IQOneToManyRelation<QTask>;

	constructor(
		qEntityConstructor: new( ...args: any[] ) => IQEntityInternal,
		entityConstructor: {new(): any},
	  entityName: string,
		fromClausePosition?: number[],
		relationPropertyName?:string,
		joinType?: JoinType
	) {
		super(qEntityConstructor, entityConstructor, entityName, fromClausePosition, relationPropertyName, joinType);
	  this.accomplished = new QBooleanField(this, qEntityConstructor, entityName, 'accomplished');
	  this.description = new QStringField(this, qEntityConstructor, entityName, 'description');
	  this.goalId = new QNumberField(this, qEntityConstructor, entityName, 'goalId');
	  this.name = new QStringField(this, qEntityConstructor, entityName, 'name');
	  this.dueDate = new QDateField(this, qEntityConstructor, entityName, 'dueDate');

	  
		let TaskClass: typeof Task = require('../../../model/task').Task;
		let QTaskClass: typeof QTask = require('./qtask').QTask;
		this.tasks = new QOneToManyRelation(this, qEntityConstructor, entityName, 'tasks', 'Task', TaskClass, QTaskClass);

	}

}

TQ.addQEntity(Goal, QGoal);
