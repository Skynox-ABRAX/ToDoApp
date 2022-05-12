import { todo } from "../models/todo";

export interface ITodoService
{
    
    getAllTodo(): Array<todo>;

    getTodoByStatus(state: string): Array<todo>;

    getNumberByCategoryOfStatus(): Array<todo>;

}