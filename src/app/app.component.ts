import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { events } from './enums/eventsEnum';

import { todo } from './models/todo';
import { TodoService } from './services/todo.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDoApp';
  campaignOne: FormGroup;
  campaignTwo: FormGroup;
  isVisible: boolean = false;
  currentTodo: todo;

  @ViewChild('overlay') overlay: ElementRef;

  constructor(elem: ElementRef, renderer: Renderer2, private todoService: TodoService) {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16)),
    });

    this.campaignTwo = new FormGroup({
      start: new FormControl(new Date(year, month, 15)),
      end: new FormControl(new Date(year, month, 19)),
    });
  }

  ngOnInit()
  {
    this.todoService.on(events.closeOverlay, ((td: todo) => { console.log(td); this.isVisible = true; this.currentTodo = td; }));
    this.todoService.on(events.addTodo, ((td: todo) => { this.isVisible = true; this.currentTodo = td }));

  }

  closeOverlay()
  {
    this.isVisible = false;
    console.log("from app");
  }



}
