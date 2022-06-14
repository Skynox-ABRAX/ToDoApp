import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgModel } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Store } from '@ngrx/store';
import { events } from 'src/app/enums/eventsEnum';
import { eventEmit } from 'src/app/models/eventEmit';
import { todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { AddTodo } from 'src/app/store/actions/todo.action';


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


  constructor(private _formBuilder: FormBuilder, private todoService: TodoService, private store: Store) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });

    console.log(this.currentTodo);
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
    //this.store.dispatch(AddTodo({ td:this.currentTodo }));


  }

  cancelTodo(e: Event)
  {
    e.preventDefault();
    this.todoService.emit(new eventEmit(events.cancelEdit, this.currentTodo));
    this.todoService.emit(new eventEmit(events.closeOverlay, this.currentTodo));
    this.eventEmitter.emit();

  }


}

