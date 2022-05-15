import { Component, Input, OnInit } from '@angular/core';
import { events } from 'src/app/enums/eventsEnum';
import { eventEmit } from 'src/app/models/eventEmit';
import { todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo: todo;
  
  status: string = "ax-closed";
  priority: string = "ax-normal";



  constructor(public todoService: TodoService) { }
  

  edit(todo:todo) {
    this.todoService.emit(new eventEmit(events.closeOverlay, todo));
  }

  ngOnInit(): void {

    this.status = "ax-" + this.todo.status.toLowerCase();
    this.priority = "ax-" + this.todo.priority.toLowerCase();

  }

  delete(todo:todo) {
    this.todoService.emit(new eventEmit(events.deleteTodo, todo));
  }
  

 

}
