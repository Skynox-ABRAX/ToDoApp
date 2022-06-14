import { todo } from "../models/todo";

export interface ITodoService
{
    
    getAllTodo(): Array<todo>;

    getTodoByStatusOrPriority(state: string): Array<todo>;

    getNumberByCategoryOfStatus(): Array<todo>;

}