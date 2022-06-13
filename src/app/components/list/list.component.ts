import { Component, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { animate, animation, query, stagger, style, transition, trigger, useAnimation } from "@angular/animations";
import { events } from 'src/app/enums/eventsEnum';
import { showListAnimation, showTodoAnimation } from 'src/app/animations/animations';
import { category } from 'src/app/models/category';
import { PageEvent } from '@angular/material/paginator';
import { settings } from 'src/app/models/settings';

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
  private eventsSubscription2: Subscription;

  @Input() events: Observable<string>;

  todos: todo[];
  todos2: todo[];
  viewStyle: boolean = true; 
  orderAttribute: boolean = true;
  isDetail: boolean = true;
  currentIndex: number = 0;
  currentPageSize: number = 5;
  matPaginator: any;

  @ViewChild('.mat-paginator-range-label') matLabelPaginator: any;
  

  constructor(private todoService: TodoService, private renderer: Renderer2)
  {
  
   }

  ngOnInit(): void
  {


    this.todos2 = this.todoService.getAllTodo();
    this.todos = this.todos2.slice(0, 5);
    
    this.eventsSubscription = this.events.subscribe(event => this.todos=this.todoService.getTodoByStatus(event.toString()))
    this.eventsSubscription2 = this.events.subscribe(event => this.todos=this.todoService.getTodoByPriority(event.toString()))


    this.todoService.on(events.deleteTodo, ((td: todo) =>
    {
      this.todos = this.todos.filter(obj => { return obj !== td }); this.todos2 = this.todos2.filter(obj => { return obj !== td });
      setTimeout(() => { this.todos = this.todos2.slice((this.currentIndex) * this.currentPageSize, (this.currentIndex + 1) * this.currentPageSize); this.orderAttribute = !this.orderAttribute }, 100 * this.currentPageSize);

      if (this.todos.length == 0) {

        setTimeout(() => { this.todos = this.todos2.slice((this.currentIndex - 1 ) * this.currentPageSize, (this.currentIndex ) * this.currentPageSize); this.orderAttribute = !this.orderAttribute }, 100 * this.currentPageSize);

        this.matPaginator = document.getElementsByClassName('mat-paginator-range-label')[0];
        this.currentIndex -= 1;

      }

  
    }));
    this.todoService.on(events.addTodo, ((td: todo) => { this.todoService.checkIfTodoExists(td, this.todos)? this.todos.push(td):'' }));
    this.todoService.on(events.switchView, ((td: todo) => { this.isDetail = !this.isDetail }));
    this.todoService.on(events.updateSettings, ((st: settings) => { this.isDetail = (st.view === 'detail'); }));
  }

  onChangePage(pe: PageEvent)
  {
    this.todos = [];
    this.currentIndex = pe.pageIndex;
    this.currentPageSize = pe.pageSize;
    setTimeout(() => { this.todos = this.todos2.slice(pe.pageIndex * pe.pageSize, (pe.pageIndex + 1) * pe.pageSize); this.orderAttribute = !this.orderAttribute }, 100 * pe.pageSize);
   
  } 





  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
    this.eventsSubscription2.unsubscribe();

  }



}
