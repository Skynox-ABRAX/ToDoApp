import { priority } from "../enums/priorityEnum";
import { status } from "../enums/statusEnum";
import { ITodo } from "../interface/ITodo";

export class todo implements ITodo
{
    id: number;
    title: string;
    content: string;
    status: status ;
    priority: priority;
    createdAt: Date;
    updatedAt: Date;
    
    constructor(values: todo)
    {
        Object.assign(this, values); 
    }





    
}