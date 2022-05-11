import { Component, Input, OnInit } from '@angular/core';
import { todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo:todo;

  constructor() { }

  ngOnInit(): void {
  }

}
