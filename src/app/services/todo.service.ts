import { Injectable } from '@angular/core';
import { priority } from '../enums/priorityEnum';
import { status } from '../enums/statusEnum';
import { ITodoService } from '../interface/ITodoService';
import { todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService implements ITodoService {

  constructor() { }
  
  getAllTodo(): todo[]
  {

    return [

      new todo({ id: 1, title: "titre 1", content: "lorem 1", status: status.started, priority: priority.normal, createdAt: new Date(), updatedAt: new Date() }),
      new todo ({ id: 2, title: "titre 2", content: "lorem 2", status: status.closed, priority: priority.normal, createdAt: new Date(), updatedAt: new Date()}),
      new todo ({ id: 3, title: "titre 3", content: "lorem 3", status: status.inProgress, priority: priority.low, createdAt: new Date(), updatedAt: new Date()}),
      new todo ({ id: 4, title: "titre 4", content: "lorem 4", status: status.started, priority: priority.high, createdAt: new Date(), updatedAt: new Date()})


    ]
    




    


  }
}
