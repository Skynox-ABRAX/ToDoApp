import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { animate, animation, query, stagger, style, transition, trigger, useAnimation } from "@angular/animations";
import { events } from 'src/app/enums/eventsEnum';
import { showListAnimation, showTodoAnimation } from 'src/app/animations/animations';
import { category } from 'src/app/models/category';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [showTodoAnimation, showListAnimation]
  
  // [
  //   trigger('showTilesTodo', [
  //   transition('* => *', [ // each time the binding value changes
  //     query(':leave', [
  //       stagger(100, [
  //         animate('0.5s', style({ opacity: 0 }))
  //       ])
  //     ],{ optional: true }),
  //     query(':enter', [
  //       style({ opacity: 0 }),
  //       stagger(100, [
  //         animate('0.5s', style({ opacity: 1 }))
  //       ])
  //     ],{ optional: true })
  //   ])
  // ])]
})

  
export class ListComponent implements OnInit
{
  private eventsSubscription: Subscription;

  @Input() events: Observable<string>;

  todos: todo[];
  todos2: todo[];
  viewStyle: boolean = true; 
  orderAttribute: boolean= true;




  constructor(private todoService: TodoService)
  {
  
   }

  ngOnInit(): void
  {
    this.todos2 = this.todoService.getAllTodo();
    this.todos = this.todos2.slice(0, 5);
    
    this.eventsSubscription = this.events.subscribe(event => this.todos=this.todoService.getTodoByStatus(event.toString()))
    this.todoService.on(events.deleteTodo, ((td: todo) => { this.todos = this.todos.filter(obj => { return obj !== td }) }));
    this.todoService.on(events.addTodo, ((td: todo) => { this.todoService.checkIfTodoExists(td, this.todos)? this.todos.push(td):'' }));
    this.todoService.on(events.switchView, ((td: todo) => { this.viewStyle = !this.viewStyle }));

  }

  onChangePage(pe: PageEvent)
  {
    this.todos = [];
    setTimeout(() => { this.todos = this.todos2.slice(pe.pageIndex * pe.pageSize, (pe.pageIndex + 1) * pe.pageSize); this.orderAttribute = !this.orderAttribute }, 100 * pe.pageSize);
  } 





  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }



}
