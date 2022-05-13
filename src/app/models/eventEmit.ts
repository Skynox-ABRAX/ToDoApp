import { events } from "../enums/eventsEnum";
import { todo } from "./todo";



export class eventEmit 
{
    name: events;
    value: todo;

    constructor(name: events, value: todo)
    {

        this.name = name;
        this.value = value;
    }
   
}