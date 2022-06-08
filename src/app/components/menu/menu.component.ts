import { Component, Input, OnInit } from '@angular/core';
import { showMenuAnimation, showTodoAnimation } from 'src/app/animations/animations';
import { events } from 'src/app/enums/eventsEnum';
import { eventEmit } from 'src/app/models/eventEmit';
import { settings } from 'src/app/models/settings';
import { todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { priority } from '../../enums/priorityEnum';
import { status } from '../../enums/statusEnum';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations:[showMenuAnimation]
})
export class MenuComponent implements OnInit
{
  
  @Input() currentSettings: settings;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  /**
   * function to add a  new todo
   */
  addTodo()
  {

    this.todoService.emit(new eventEmit(events.addTodo, new todo({ id: 0, title: '', content: '', status: status.started, priority: priority.normal, closing: new Date(), updatedAt: new Date(), createdAt: new Date()})));
  }

  showOrHidePomodoroPanel()
  {
    this.todoService.emit(new eventEmit(events.showOrHidePanelPomodoro, todo));
  }

  showOrHideTodoPanel()
  {
    this.todoService.emit(new eventEmit(events.showOrHideTodoPanel, todo));
  }

  switchPanel()
  {
    this.todoService.emit(new eventEmit(events.switchPanel, todo));
  }

  editSettings(e: Event)
  {
    e.preventDefault();
    this.todoService.emit(new eventEmit(events.updateSettings, this.currentSettings));

  }


}
