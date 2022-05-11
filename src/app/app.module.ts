import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import { MenuComponent } from './components/menu/menu.component';
import { AsideComponent } from './components/aside/aside.component';
import { ContentComponent } from './components/content/content.component';
import { ListComponent } from './components/list/list.component';
import { DatePipePipe } from './pipes/date-pipe.pipe';



@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    MenuComponent,
    AsideComponent,
    ContentComponent,
    ListComponent,
    DatePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatBadgeModule




  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
