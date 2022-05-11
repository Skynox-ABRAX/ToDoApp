import { Component, OnInit } from '@angular/core';
import { todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit
{
  
  todos: todo[];


  constructor(private todoService: TodoService) { }

  ngOnInit(): void
  {

    this.todos = this.todoService.getAllTodo();

  }

}
