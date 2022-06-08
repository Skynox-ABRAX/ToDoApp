import { Action, createAction, props } from "@ngrx/store";
import { todo } from "src/app/models/todo";


export enum TodoActionTypes
{
    ADD_TODO = '[Menu Component] add todo'
}


export const AddTodo = createAction(
    TodoActionTypes.ADD_TODO,
    props < { td: todo }>()
);


// Action Type

export type todoActions = TodoActionTypes;

        
