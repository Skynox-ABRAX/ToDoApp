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
import { LayoutModule } from '@angular/cdk/layout';
import {MatExpansionModule} from '@angular/material/expansion';
import { NgxMatTimepickerModule, NgxMatNativeDateModule, NgxMatDatetimePickerModule} from '@angular-material-components/datetime-picker';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ToastrModule } from 'ngx-toastr'

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
    NgxMatTimepickerModule,
    MatExpansionModule,
    MatCardModule,
    MatPaginatorModule,
    LayoutModule,
    ToastrModule.forRoot(),
    NgxMatDatetimePickerModule
    
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
    MatExpansionModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    MatCardModule,
    LayoutModule,
    MatPaginatorModule,
    NgxMatDatetimePickerModule
    
  ]
})
export class AngularMaterialModule { }
