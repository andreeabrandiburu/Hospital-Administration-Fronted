import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorDetailComponent } from './doctor-detail/doctor-detail.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PacientDetailComponent } from './pacient-detail/pacient-detail.component';
import { PacientComponent } from './pacient/pacient.component';

const routes: Routes = [
  { path: '', redirectTo: '/pacients', pathMatch: 'full' },
{path: 'pacients', component: PacientComponent},
{path: 'pacients/pacient/detail/:id', component: PacientDetailComponent},
{path: 'doctors', component: DoctorComponent},
{path: 'doctors/doctors/detail/:id', component: DoctorDetailComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
