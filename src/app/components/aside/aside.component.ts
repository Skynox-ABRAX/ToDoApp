import { Component, Input, OnInit } from '@angular/core';
import { showTodoAnimation } from 'src/app/animations/animations';
import { events } from 'src/app/enums/eventsEnum';
import { eventEmit } from 'src/app/models/eventEmit';
import { pomodoro } from 'src/app/models/pomodoro';
import { settings } from 'src/app/models/settings';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
  animations: [showTodoAnimation]
})
export class AsideComponent implements OnInit {

  pomodoros: pomodoro[] = [];
  @Input() currentSettings: settings;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void
  {
    this.todoService.on(events.deletePomodoro, ((pm: pomodoro) => { this.pomodoros = this.pomodoros.filter(obj => { return obj !== pm })  }));
    this.todoService.on(events.updateSettings, ((set: settings) => { this.currentSettings = set }));
  }

  addPomodoro()
  {
    this.pomodoros.reverse();
    var pom = new pomodoro(this.pomodoros.length + 1, new Date(), new Date(), new Date);
    pom._timeRemaining = pom.setTimeRemaining();
    this.pomodoros.push(pom)
    this.pomodoros.reverse();
  }

  closePanel()
  {
      this.todoService.emit(new eventEmit(events.showOrHidePanelPomodoro, {}));
  }

}
