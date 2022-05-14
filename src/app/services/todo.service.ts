import { EventEmitter, Injectable } from '@angular/core';
import { filter, map, Subject, Subscription } from 'rxjs';
import { events } from '../enums/eventsEnum';
import { priority } from '../enums/priorityEnum';
import { status } from '../enums/statusEnum';
import { ITodoService } from '../interface/ITodoService';
import { category } from '../models/category';
import { eventEmit } from '../models/eventEmit';
import { todo } from '../models/todo';


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

  getTodoByStatus(state: string): todo[]
  {
    return this._todos.filter(x => x.status === state);
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


  
  getAllTodo(): todo[]
  {

    this._todos = [

      new todo({ id: 1, title: "titre 1", content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptatum perferendis quam explicabo eos, facere odio est enim, pariatur ulla", status: status.started, priority: priority.normal, closing: new Date(), createdAt: new Date(), updatedAt: new Date() }),
      new todo ({ id: 2, title: "titre 2", content: " Lorem ips. Porro voluptatum perferendis quam explicabo eos, facere odio est enim, pariatur ulla", status: status.closed, priority: priority.normal, closing: new Date(), createdAt: new Date(), updatedAt: new Date()}),
      new todo ({ id: 3, title: "titre 3", content: "lorem 3", status: status.Canceled, priority: priority.low, closing: new Date(), createdAt: new Date(), updatedAt: new Date()}),
      new todo ({ id: 4, title: "titre 4", content: " Lorem ipsum dolorriatur ulla", status: status.started, priority: priority.high, closing: new Date(), createdAt: new Date(), updatedAt: new Date()}),
      new todo ({ id: 5, title: "titre 5", content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro t enim, pariatur ulla", status: status.inProgress, priority: priority.low, closing: new Date(), createdAt: new Date(), updatedAt: new Date()}),
      new todo ({ id: 6, title: "titre 6", content: "lorem 6", status: status.started, priority: priority.high, closing: new Date(), createdAt: new Date(), updatedAt: new Date()}),
      new todo ({ id: 7, title: "titre 7", content: "lorem 7", status: status.inProgress, priority: priority.low, closing: new Date(), createdAt: new Date(), updatedAt: new Date()}),
      new todo ({ id: 8, title: "titre 8", content: "lorem 8", status: status.Canceled, priority: priority.high, closing: new Date(), createdAt: new Date(), updatedAt: new Date()})


    ]

    return this._todos;
    
  }
}
