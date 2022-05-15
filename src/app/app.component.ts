import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { events } from './enums/eventsEnum';

import { todo } from './models/todo';
import { ThemeService } from './services/theme.service';
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
  isVisiblePomodoroPanel: boolean = true;
  isVisibleTodoPanel: boolean = true
  order: boolean = false;
  useDefault = false;

  @ViewChild('overlay') overlay: ElementRef;


  constructor(elem: ElementRef, renderer: Renderer2, private todoService: TodoService,    private themeService: ThemeService) {
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
    this.todoService.on(events.showOrHidePanelPomodoro, ((td: todo) => { this.isVisiblePomodoroPanel =! this.isVisiblePomodoroPanel }));
    this.todoService.on(events.showOrHideTodoPanel, ((td: todo) => { this.isVisibleTodoPanel =! this.isVisibleTodoPanel }));
    this.todoService.on(events.switchPanel, ((td: todo) => { this.order=! this.order }));
    this.setLightbulb();
  }

  closeOverlay()
  {
    this.isVisible = false;
    console.log("from app");
  }

  setLightbulb() {

  }

  toggle(event: MatSlideToggleChange) {
    console.log('toggle', event.checked);
    this.useDefault = event.checked;
    this.toggleTheme();
}

  toggleTheme() {
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
    } else {
      this.themeService.setDarkTheme();
    }

    this.setLightbulb();
  }



}
