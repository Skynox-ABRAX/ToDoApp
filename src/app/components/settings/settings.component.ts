import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { events } from 'src/app/enums/eventsEnum';
import { eventEmit } from 'src/app/models/eventEmit';
import { settings } from 'src/app/models/settings';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit
{
  
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  
  @Output() eventEmitter: EventEmitter<void> = new EventEmitter<void>();
  @Input() setting: settings;

  themes: string[] = ['light', 'dark'];
  views: string[] = ['detail', 'list'];
  tempSettings: settings;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void
  {
    // allow to clone the object setting
    this.tempSettings = {...this.setting};
  }

  closeOverlay()
  {

    this.todoService.emit(new eventEmit(events.updateSettings, this.tempSettings));
    this.eventEmitter.emit();
  }

  cancelSettings(e:Event)
  {
    e.preventDefault();
    this.todoService.emit(new eventEmit(events.updateSettings, this.tempSettings));
    this.eventEmitter.emit();
  }

  saveSettings(e:Event)
  {
    e.preventDefault();
    this.todoService.emit(new eventEmit(events.updateSettings, this.setting));
    this.eventEmitter.emit();
  }

}
