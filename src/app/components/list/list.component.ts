import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { animate, animation, query, stagger, style, transition, trigger, useAnimation } from "@angular/animations";
import { events } from 'src/app/enums/eventsEnum';
import { showTodoAnimation } from 'src/app/animations/animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [
    trigger('showTilesTodo', [
    transition('* => *', [ // each time the binding value changes
      query(':leave', [
        stagger(100, [
          animate('0.5s', style({ opacity: 0 }))
        ])
      ],{ optional: true }),
      query(':enter', [
        style({ opacity: 0 }),
        stagger(100, [
          animate('0.5s', style({ opacity: 1 }))
        ])
      ],{ optional: true })
    ])
  ])]
})

  
export class ListComponent implements OnInit
{
  private eventsSubscription: Subscription;

  @Input() events: Observable<string>;

  todos: todo[];



  constructor(private todoService: TodoService)
  {
  
   }

  ngOnInit(): void
  {
    this.todos = this.todoService.getAllTodo();
    console.log('from ng init' + this.todos);
    this.eventsSubscription = this.events.subscribe(event => this.todos=this.todoService.getTodoByStatus(event.toString()))
    this.todoService.on(events.deleteTodo, ((td: todo) => { this.todos = this.todos.filter(obj => { return obj !== td }) }));

  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

}
