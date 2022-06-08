import { createReducer, on, props } from "@ngrx/store";
import { todo } from "src/app/models/todo";
import { AddTodo } from "../actions/todo.action";
import { status } from '../../enums/statusEnum';
import { priority } from '../../enums/priorityEnum';




export interface TodoState
{
    data: todo[]
    loaded:boolean,
    loading: boolean,

}

export const initialState : TodoState = {

    data: [ new todo ({ id: 1, title: "titre 1", content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptatum perferendis quam explicabo eos, facere odio est enim, pariatur ulla", status: status.started, priority: priority.normal, closing: new Date(), createdAt: new Date(), updatedAt: new Date() }),
],
    loaded:false,
    loading: false,


}


export const todoReducer = createReducer(
    initialState,
    // on(AddTodo, (state) => {
        
    //         const data2 = state.data;
    //         data2.push();
    //         return { ...data2, loaded: false, loading: true };
        
    //     // {
    //     // ...state, td, loading: true
    //     // }
    // })
    )
    
 


