import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit
{
  private eventsSubscription: Subscription;

  @Input() events: Observable<string>;

  todos: todo[];


  constructor(private todoService: TodoService) { }

  ngOnInit(): void
  {

    this.todos = this.todoService.getAllTodo();
    this.eventsSubscription = this.events.subscribe(event => this.todos=this.todoService.getTodoByStatus(event.toString()))

  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

}
