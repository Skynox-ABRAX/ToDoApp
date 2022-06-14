import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MenuComponent } from './components/menu/menu.component';
import { AsideComponent } from './components/aside/aside.component';
import { ContentComponent } from './components/content/content.component';
import { ListComponent } from './components/list/list.component';
import { DatePipePipe } from './pipes/date-pipe.pipe';
import { OverlayComponent } from './components/overlay/overlay.component';
import { EditComponent } from './components/edit/edit.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { FormBuilder } from '@angular/forms';
import { PomodoroComponent } from './components/pomodoro/pomodoro.component';
import { ViewListTodoComponent } from './components/view-list-todo/view-list-todo.component';
import { SettingsComponent } from './components/settings/settings.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store'; 
import { todoReducer } from './store/reducers/todo.reducer';
import { TodoReducers } from './store/reducers/index';
import { FooterComponent } from './components/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    MenuComponent,
    AsideComponent,
    ContentComponent,
    ListComponent,
    DatePipePipe,
    OverlayComponent,
    EditComponent,
    PomodoroComponent,
    ViewListTodoComponent,
    SettingsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(TodoReducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({stateKey: 'TodoReducers'})
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
