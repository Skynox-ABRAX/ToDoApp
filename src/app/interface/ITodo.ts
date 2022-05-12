import { priority } from "../enums/priorityEnum";
import { status } from "../enums/statusEnum";

export interface ITodo
{
    id: number;
    title: string;
    content: string;
    status: status;
    priority: priority;
    closing: Date;
    createdAt: Date;
    updatedAt: Date;

}