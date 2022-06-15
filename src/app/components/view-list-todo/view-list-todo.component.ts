import { Component, Input, OnInit } from '@angular/core';

import { events } from 'src/app/enums/eventsEnum';
import { eventEmit } from 'src/app/models/eventEmit';
import { todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-view-list-todo',
  templateUrl: './view-list-todo.component.html',
  styleUrls: ['./view-list-todo.component.scss']
})
export class ViewListTodoComponent implements OnInit {

  @Input() todo: todo;
  _tempTodo: todo;
  song: boolean = false;
  id: any;

  status: string = "ax-closed";
  priority: string = "ax-normal";

  constructor(private todoService: TodoService) { }

  edit(todo2: todo)
  {
    
    this._tempTodo = new todo ({ id: this.todo.id, title: this.todo.title, content: this.todo.content, status: this.todo.status, priority: this.todo.priority, closing: this.todo.closing, updatedAt: this.todo.createdAt, createdAt: this.todo.updatedAt });
    this.todoService.emit(new eventEmit(events.closeOverlay, todo2));

  }

  ngOnInit(): void {

    this.status = "ax-" + this.todo.status.toLowerCase();
    this.priority = "ax-" + this.todo.priority.toLowerCase();

    this.id = setTimeout(() =>
    {
      setInterval(() =>
      {
        if (new Date(Date.now()) > this.todo.closing) {
          this.song = true;
        } else {
          this.song = false;
        }
      }, 60000
      )
    }, 5000);

    this.todoService.on(events.cancelEdit, ((td: todo) =>
    {
      this.todo.id = this._tempTodo.id;
      this.todo.title = this._tempTodo.title;
      this.todo.content = this._tempTodo.content;
      this.todo.status = this._tempTodo.status;
      this.todo.priority = this._tempTodo.priority;
      this.todo.closing = this._tempTodo.closing;
      this.todo.createdAt = this._tempTodo.createdAt;
      this.todo.updatedAt = this._tempTodo.updatedAt;
      this._tempTodo = null;
      }));

  }

  delete(todo:todo) {
    this.todoService.emit(new eventEmit(events.deleteTodo, todo));
  }


  ngDoCheck()
  {
    this.status = "ax-" + this.todo.status.toLowerCase();
    this.priority = "ax-" + this.todo.priority.toLowerCase();
    if (new Date(Date.now()) > this.todo.closing) {
      this.song = true;
    } else {
      this.song = false;
    }
  }
  


}
