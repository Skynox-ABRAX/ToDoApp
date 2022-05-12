import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit
{
  @Output() eventEmitter: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  closeOverlay()
  {
    this.eventEmitter.emit();
     // this.attendees = [...this.attendees, attendee];
    }
  }


