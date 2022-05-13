import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgModel } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { todo } from 'src/app/models/todo';


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
  @Input() currentTodo?: todo;


  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });

    console.log(this.currentTodo);
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
}

