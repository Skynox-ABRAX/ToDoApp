import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { Subject } from 'rxjs';
import { events } from 'src/app/enums/eventsEnum';
import { category } from 'src/app/models/category';
import { eventEmit } from 'src/app/models/eventEmit';
import { todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],

})
export class ContentComponent implements OnInit {

  eventParentSubject: Subject<string> = new Subject<string>();
  cat: category;
  cat2: number




  constructor(private todoService: TodoService) { }

  ngOnInit(): void
  {
    this.cat = new category(this.todoService.getNumberItemsByCategory());
    this.cat2 = this.cat.started;
  
  }

  getFilter(event: any)
  {
    this.eventParentSubject.next(event.target.innerText);
  }


  closePanel(){
    this.todoService.emit(new eventEmit(events.showOrHideTodoPanel, todo));
  }

  showListTodo()
  {
    
    this.todoService.emit(new eventEmit(events.switchView, todo));
  }

}
