import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatAccordion, MatExpansionPanel } from '@angular/material/expansion';
import { Subject } from 'rxjs';

import { events } from 'src/app/enums/eventsEnum';
import { category } from 'src/app/models/category';
import { eventEmit } from 'src/app/models/eventEmit';
import { level } from 'src/app/models/level';
import { todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],

})
export class ContentComponent implements OnInit
{

  eventParentSubject: Subject<string> = new Subject<string>();
  cat: category;
  cat2: number;
  panelOpenState = false;
  prt: level;

  @ViewChild('accordion') accordion: ElementRef<MatAccordion>;


  constructor(private todoService: TodoService) { }

  ngOnInit(): void
  {

    this.cat = new category(this.todoService.getNumberItemsByCategory());
    this.prt = new level(this.todoService.getNumberItemsByPriority());

    this.accordion.nativeElement.closeAll();
    this.cat2 = this.cat.started;
  }

  getFilter(event: any)
  {
    console.log("from filter", event);
    this.eventParentSubject.next(event.target.innerText);
  }

  closePanel()
  {
    this.todoService.emit(new eventEmit(events.destroyTodoPanel, todo));
  }

  showListTodo()
  {
    this.todoService.emit(new eventEmit(events.switchView, todo));
  }



}
