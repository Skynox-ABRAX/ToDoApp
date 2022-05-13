import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { Subject } from 'rxjs';
import { todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  eventParentSubject: Subject<string> = new Subject<string>();


  constructor(private todoService: TodoService) { }

  ngOnInit(): void
  {

  }

  getFilter(event: any)
  {
    this.eventParentSubject.next(event.target.innerText);
  }

}
