import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { settings } from 'src/app/models/settings';
import { todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit
{
  @Input() currentTodo: todo;
  @Input() isEdit: boolean = true;
  @Input() currentSettings: settings;

  @Output() eventEmitter: EventEmitter<void> = new EventEmitter<void>();


  constructor(private todoService: TodoService) { }

  ngOnInit(): void
  {

  }

  closeOverlay()
  {
    this.eventEmitter.emit();
  }

  
  }


