import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgModel } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
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

  selectedStatus: string;
  selectedPriority: string;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  events: string[] = [];
  myTimePicker: any;
  myTime: Date;
  @Input() currentTodo?: todo;


  constructor(private _formBuilder: FormBuilder, private todoService: TodoService) {}

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
    this.todoService.emit(new eventEmit(events.addTodo, this.currentTodo));
    this.eventEmitter.emit();


  }


}

