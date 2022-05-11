import { todo } from "../models/todo";

export interface ITodoService
{
    
    getAllTodo(): Array<todo>

}