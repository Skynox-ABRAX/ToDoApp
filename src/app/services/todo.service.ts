import { EventEmitter, Injectable } from '@angular/core';
import { filter, map, Subject, Subscription } from 'rxjs';

import { events } from '../enums/eventsEnum';
import { status } from '../enums/statusEnum';
import { ITodoService } from '../interface/ITodoService';
import { category } from '../models/category';
import { level } from '../models/level';
import { eventEmit } from '../models/eventEmit';
import { todo } from '../models/todo';
import { priority } from '../enums/priorityEnum';


@Injectable({
  providedIn: 'root'
})
export class TodoService implements ITodoService {

  private _todos: todo[];
  private subject$ = new Subject<eventEmit>()
  category: category;

  constructor() { }

  emit(event: eventEmit) {
    this.subject$.next(event); 
  } 

  on(event: events, action: any): Subscription {
    return this.subject$.pipe(
      filter((e: eventEmit) => e.name == event),
  map((e: eventEmit) => e.value)).subscribe(action);
    }

  
  getNumberByCategoryOfStatus(): todo[]
  {
    throw new Error('Method not implemented.');
  }

  getTodoByStatusOrPriority(state: string): todo[]
  {


    if(state.indexOf('\n') != -1){

      state = state.substring(0, state.indexOf('\n'));

    }

    switch (state) {

      case status.started: case status.inProgress: case status.closed: case status.Canceled :{
     
        return this._todos.filter(x => x.status == state);

        break;

      }

    case priority.low: case priority.normal: case priority.high: {
        return this._todos.filter(x => x.priority == state);

        break;
      }


      default: {
        return [];
        break;
      }

    }

  }

  getTodoByPriority(state: string): todo[]
  {
    return this._todos.filter(x => x.priority === state);
  }


  getNumberItemsByCategory()
  {
    this.getAllTodo();
    var cat = new category({
      started: this._todos.filter(x => x.status === status.started).length,
      inProgres: this._todos.filter(x => x.status === status.inProgress).length,
      closed: this._todos.filter(x => x.status === status.closed).length,
      canceled: this._todos.filter(x => x.status === status.Canceled).length
  });

    return cat;


  }

  getNumberItemsByPriority()
  {
    this.getAllTodo();
    var prt = new level({
      low: this._todos.filter(x => x.priority === priority.low).length,
      normal: this._todos.filter(x => x.priority === priority.normal).length,
      high: this._todos.filter(x => x.priority === priority.high).length

  });

    return prt;


  }




  checkIfTodoExists(todo: todo, todos: todo[]):boolean
  {

    return (todos.indexOf(todo) === -1);
  }



  getAllTodo(): todo[]
  {

    this._todos = [

      new todo ({ id: 1, title: "titre 1", content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptatum perferendis quam explicabo eos, facere odio est enim, pariatur ulla", status: status.started, priority: priority.normal, closing: new Date(), createdAt: new Date(), updatedAt: new Date() }),
      new todo ({ id: 2, title: "titre 2", content: " Lorem ips. Porro voluptatum perferendis quam explicabo eos, facere odio est enim, pariatur ulla", status: status.closed, priority: priority.normal, closing: new Date(), createdAt: new Date(), updatedAt: new Date()}),
      new todo ({ id: 3, title: "titre 3", content: "lorem 3", status: status.Canceled, priority: priority.low, closing: new Date(), createdAt: new Date(), updatedAt: new Date()}),
      new todo ({ id: 4, title: "titre 4", content: " Lorem ipsum dolorriatur ulla", status: status.started, priority: priority.high, closing: new Date(), createdAt: new Date(), updatedAt: new Date()}),
      new todo ({ id: 5, title: "titre 5", content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro t enim, pariatur ulla", status: status.inProgress, priority: priority.low, closing: new Date(), createdAt: new Date(), updatedAt: new Date()}),
      new todo ({ id: 6, title: "titre 6", content: "lorem 6", status: status.started, priority: priority.high, closing: new Date(), createdAt: new Date(), updatedAt: new Date()}),
      new todo ({ id: 7, title: "titre 7", content: "lorem 7", status: status.inProgress, priority: priority.low, closing: new Date(), createdAt: new Date(), updatedAt: new Date()}),
      new todo ({ id: 8, title: "titre 8", content: "lorem 8", status: status.Canceled, priority: priority.high, closing: new Date(), createdAt: new Date(), updatedAt: new Date()}),
      new todo ({ id: 9, title: "titre 3", content: "lorem 3", status: status.Canceled, priority: priority.low, closing: new Date(), createdAt: new Date(), updatedAt: new Date()}),
      new todo ({ id: 10, title: "titre 4", content: " Lorem ipsum dolorriatur ulla", status: status.started, priority: priority.high, closing: new Date(), createdAt: new Date(), updatedAt: new Date()}),
      new todo ({ id: 11, title: "titre 5", content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro t enim, pariatur ulla", status: status.inProgress, priority: priority.low, closing: new Date(), createdAt: new Date(), updatedAt: new Date()}),
      new todo ({ id: 12, title: "titre 6", content: "lorem 6", status: status.started, priority: priority.high, closing: new Date(), createdAt: new Date(), updatedAt: new Date()}),
      new todo ({ id: 13, title: "titre 7", content: "lorem 7", status: status.inProgress, priority: priority.low, closing: new Date(), createdAt: new Date(), updatedAt: new Date()}),
      new todo ({ id: 14, title: "titre 8", content: "lorem 8", status: status.Canceled, priority: priority.high, closing: new Date(), createdAt: new Date(), updatedAt: new Date()})

    ]

    return this._todos;
    
  }
}
