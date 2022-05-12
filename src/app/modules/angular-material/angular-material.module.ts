import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgxMatTimepickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';


@NgModule({
  declarations: [],
  imports: [
    MatSliderModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatStepperModule,
    NgxMatTimepickerModule
    
  ],
  exports: [
    MatSliderModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatStepperModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule
  ]
})
export class AngularMaterialModule { }
