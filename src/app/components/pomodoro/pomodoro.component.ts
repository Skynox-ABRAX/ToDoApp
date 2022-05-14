import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { DateFilterFn } from '@angular/material/datepicker';
import { map, Observable, timer, take } from 'rxjs';
import { events } from 'src/app/enums/eventsEnum';
import { eventEmit } from 'src/app/models/eventEmit';
import { pomodoro } from 'src/app/models/pomodoro';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss'],


})
export class PomodoroComponent implements OnInit {

  @Input() pomodoro: pomodoro;
  timeRemaining: Date;
  test2: string;
  timing: Date;
  timing2: Date;
  currentTime: Date;
  counter: number;
  dateStart: Date;
  status: boolean = false;
  statusClock = 'ax-green';


  /*timers$: Observable<number>;*/
  test = new pomodoro(0, new Date(), new Date(), new Date());
  id: any;

// startTimer(counter: number) {
//   this.timers$ = timer(0, 1000).pipe(
//     take(counter),
//     map(_ => --counter)
//   );
// }

  constructor(private changeDetector: ChangeDetectorRef, private todoService: TodoService)
  { 

  }

  ngOnInit(): void
  {
    this.timing2 = new Date(1970, 1, 1, 0, 25, 0, 0);
    this.counter = this.timing2.getTime();

  }

  startOrStop()
  {

    if (!this.status) {

      this.id = setInterval(() =>
      {
        this.currentTime = this.timing2;
        this.timing2 = new Date((this.timing2.getTime() - 1000));
        console.log(this.timing2);
        this.statusClock = 'ax-red';
        if (this.timing2.getTime() == this.counter - 1000*60*25) {
          clearInterval(this.id);
          this.statusClock = 'ax-green';
        }
      }, 1000);



      this.status = !this.status;

    } else {

      this.id ? clearInterval(this.id) : '';
      this.status = !this.status;
      this.statusClock = 'ax-green';
    }


     
  }

  setTime()
  {

    this.test = new pomodoro(0,new Date(),new Date(), new Date());
    console.log(this.test._timeRemaining);

   /* this.changeDetector.detectChanges();*/
  }


  reset()
  {
    this.timing2 = new Date(1970, 1, 1, 0, 25, 0, 0);
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
