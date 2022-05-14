import { events } from "../enums/eventsEnum";
import { todo } from "./todo";



export class eventEmit 
{
    name: events;
    value: any;

    constructor(name: events, value: any)
    {

        this.name = name;
        this.value = value;
    }
   
}