import { Component, OnInit } from '@angular/core';
import { events } from 'src/app/enums/eventsEnum';
import { eventEmit } from 'src/app/models/eventEmit';
import { todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { priority } from '../../enums/priorityEnum';
import { status } from '../../enums/statusEnum';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

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


}
