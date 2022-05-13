import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { todo } from 'src/app/models/todo';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit
{
  @Input() currentTodo: todo;
  @Output() eventEmitter: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void
  {
    
    console.log(this.currentTodo);
  }

  closeOverlay()
  {
    this.eventEmitter.emit();
     // this.attendees = [...this.attendees, attendee];
    }
  }


