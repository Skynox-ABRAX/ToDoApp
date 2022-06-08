import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { events } from 'src/app/enums/eventsEnum';
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

  @Output() eventEmitter: EventEmitter<void> = new EventEmitter<void>();

  @Input() currentSettings: settings;



  constructor(private todoService: TodoService) { }

  ngOnInit(): void
  {
    // this.todoService.on(events.addTodo, (() => this.isEdit = true));
    // this.todoService.on(events.updateSettings, ((st:settings) => this.settings=st));


  }

  closeOverlay()
  {
    this.eventEmitter.emit();
  }

  
  }


