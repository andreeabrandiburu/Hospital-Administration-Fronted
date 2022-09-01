import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InformationComponent } from './information/information.component';
import { HttpClientModule } from '@angular/common/http';
import { HighlightDirective } from './directives/highlight.directive';
import { PacientComponent } from './pacient/pacient.component';
import { PacientDetailComponent } from './pacient-detail/pacient-detail.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorDetailComponent } from './doctor-detail/doctor-detail.component';
import { SpitalComponent } from './spital/spital.component';
import { SpitalDetailComponent } from './spital-detail/spital-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    InformationComponent,
    HighlightDirective,
    PacientComponent,
    PacientDetailComponent,
    DoctorComponent,
    DoctorDetailComponent,
    SpitalComponent,
    SpitalDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
