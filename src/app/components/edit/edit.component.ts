import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Store } from '@ngrx/store';

import { events } from 'src/app/enums/eventsEnum';
import { eventEmit } from 'src/app/models/eventEmit';
import { todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @Output() eventEmitter: EventEmitter<void> = new EventEmitter<void>();

  @Input() currentTodo?: todo;

  selectedStatus: string;
  selectedPriority: string;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  events: string[] = [];
  myTimePicker: any;
  myTime: Date;


  constructor(private todoService: TodoService, private store: Store) {}

  ngOnInit() {
    this.myTime = this.currentTodo?.closing;
  }

  ngOnChanges()
  {
    console.log(this.currentTodo);
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }


  closeOverlay()
  {
    console.log("hello");
    this.eventEmitter.emit();
  }

 
  saveTodo(e: Event)
  {
    e.preventDefault();
    this.currentTodo.updatedAt = new Date(Date.now());
    this.todoService.emit(new eventEmit(events.saveTodo, this.currentTodo));
    this.eventEmitter.emit();

  }

  cancelTodo(e: Event)
  {
    e.preventDefault();
    this.todoService.emit(new eventEmit(events.cancelEdit, this.currentTodo));
    this.todoService.emit(new eventEmit(events.closeOverlay, this.currentTodo));
    this.eventEmitter.emit();
  }


}

