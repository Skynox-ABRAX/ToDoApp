import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { events } from 'src/app/enums/eventsEnum';
import { eventEmit } from 'src/app/models/eventEmit';
import { pomodoro } from 'src/app/models/pomodoro';
import { settings } from 'src/app/models/settings';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss'],


})
export class PomodoroComponent implements OnInit {

  @Input() pomodoro: pomodoro;
  @Input() setting: settings;

  timeRemaining: Date;
  timing: Date;
  timing2: Date;
  currentTime: Date;
  counter: number;
  dateStart: Date;
  status: boolean = false;
  statusClock = 'ax-green';
  statusTitle: string = '';
  startingTime = new pomodoro(0, new Date(), new Date(), new Date());
  id: any;

  constructor(private changeDetector: ChangeDetectorRef, private todoService: TodoService, private toastr: ToastrService)
  { 

  }

  ngOnInit(): void
  {
    this.timing2 = new Date(1970, 1, 1, this.setting.hour, this.setting.minute, this.setting.second);
    this.counter = this.timing2.getTime();

  }

  startOrStop()
  {

    if (!this.status) {

      this.toastr.warning("The pomodoro is running!");

      this.statusTitle = " - running";
    

      this.id = setInterval(() =>
      {
        this.currentTime = this.timing2;
        this.timing2 = new Date((this.timing2.getTime() - 1000));
        this.statusClock = 'ax-red';

        if (this.timing2.getTime() == this.counter - (this.setting.hour*60*60*1000 + this.setting.minute*60*1000 + this.setting.second*1000)) {
          clearInterval(this.id);
          this.toastr.success("The pomodoro is done!");
          this.statusTitle = " - done";
          this.statusClock = 'ax-green';
          this.playAudio();
        }
      }, 1000);

      this.status = !this.status;

    } else {

      this.id ? clearInterval(this.id) : '';
      this.status = !this.status;
      this.statusClock = 'ax-green';
      this.toastr.error("The pomodoro is paused!")
      this.statusTitle = " - paused";
    }
     
  }

  playAudio(){
    let audio = new Audio();
    audio.load();
    audio.play();
  }


  setTime()
  {
    this.startingTime = new pomodoro(0,new Date(),new Date(), new Date());
  }


  reset()
  {
    this.timing2 = new Date(1970, 1, 1, this.setting.hour, this.setting.minute, this.setting.second);
    this.counter = this.timing2.getTime();
    this.statusClock = 'ax-green';
  }

  deletePomodoro()
  {
    this.todoService.emit(new eventEmit(events.deletePomodoro, this.pomodoro));
  }

  ngOnDestroy()
  {
    this.id ? clearInterval(this.id) : '';
  }

}
