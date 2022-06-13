import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { AfterViewInit, Component, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Store } from '@ngrx/store';
import { showAsideAnimation, showContentAnimation, showEditAnimation } from './animations/animations';
import { MenuComponent } from './components/menu/menu.component';
import { events } from './enums/eventsEnum';
import { settings } from './models/settings';

import { todo } from './models/todo';
import { ThemeService } from './services/theme.service';
import { TodoService } from './services/todo.service';
import { AddTodo } from './store/actions/todo.action';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[showContentAnimation, showAsideAnimation, showEditAnimation]
})
export class AppComponent implements AfterViewInit{
  title = 'ToDoApp';
  campaignOne: FormGroup;
  campaignTwo: FormGroup;
  isVisible: boolean = false;
  currentTodo: todo;
  isVisiblePomodoroPanel: boolean = true;
  isVisibleTodoPanel: boolean = true
  isMenuVisible: boolean = false;
  isEdit: boolean = true;
  order: boolean = false;
  useDefault = false;
  nameTheme: string = "light";
  currentTime: number;
  currentSettings: settings = new settings();
  id2: any;

  @ViewChild('overlay') overlay: ElementRef;
  @ViewChild('hello', {read: ElementRef}) test : ElementRef; 


  constructor(elem: ElementRef, renderer: Renderer2, private todoService: TodoService,     private themeService: ThemeService, private store: Store, public breakpointObserver: BreakpointObserver) {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16)),
    });

    this.campaignTwo = new FormGroup({
      start: new FormControl(new Date(year, month, 15)),
      end: new FormControl(new Date(year, month, 19)),
    });
  }


  ngAfterViewInit(): void {
    //console.log("menucomponent:", this.test);
  }


  ngOnInit()
  {

    this.breakpointObserver
      .observe(['(min-width: 70rem)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          if(this.isMenuVisible=true){
            this.isMenuVisible=false;
          }
        } 
      });



    this.todoService.on(events.closeOverlay, ((td: todo) => { this.isVisible = true; this.currentTodo = td; this.isEdit = true; this.showOrHideMenu();}));
    this.todoService.on(events.addTodo, ((td: todo) => { this.isVisible = true; this.currentTodo = td; this.isEdit = true; this.showOrHideMenu();}));
    this.todoService.on(events.showOrHidePanelPomodoro, ((td: todo) => { this.isVisiblePomodoroPanel = !this.isVisiblePomodoroPanel; this.showOrHideMenu(); }));
    this.todoService.on(events.showOrHideTodoPanel, ((td: todo) => { this.isVisibleTodoPanel =! this.isVisibleTodoPanel; this.showOrHideMenu(); }));
    this.todoService.on(events.switchPanel, ((td: todo) => { this.order = !this.order; this.showOrHideMenu();}));
    this.todoService.on(events.updateSettings, ((st:settings) => { this.isVisible = true; this.isEdit = false; this.currentSettings=st; this.showOrHideMenu();}));

    this.setLightbulb();
    this.id2 = setInterval(()=> this.currentTime= Date.now(), 1000)
  }

  closeOverlay()
  {
    this.isVisible = false;
    this.showOrHideMenu();
  }

  setLightbulb() {

  }

  toggle(event: MatSlideToggleChange) {
    console.log('toggle', event.checked);
    this.useDefault = event.checked;
    this.toggleTheme();
}

  toggleTheme() {
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
      this.nameTheme = "light";
    } else {
      this.themeService.setDarkTheme();
      this.nameTheme = "dark";
    }

    this.setLightbulb();
  }

  showOrHideMenu(){


    this.isMenuVisible=!this.isMenuVisible;

   //this.test.nativeElement.classList.toggle("visible");

  }



}
