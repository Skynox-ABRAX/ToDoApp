import { ActionReducerMap } from '@ngrx/store'
import * as TodoRX from '../reducers/todo.reducer'

export interface TodoAppState
{
    todos : TodoRX.TodoState
}

export const TodoReducers: ActionReducerMap<TodoAppState> = {
    todos: TodoRX.todoReducer
}


