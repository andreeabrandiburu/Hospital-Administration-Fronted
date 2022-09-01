import { Component, OnInit } from '@angular/core';
import { Doctor } from '../models/doctor';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  doctors: Doctor[] = [];
  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.getDoctors();
  }

  getDoctors(): void {
    this.doctorService.getDoctors()
    .subscribe(doctors => this.doctors = doctors);
  }

  delete(id: Number): void {
    const doctorsToBeDeleted = this.doctors.filter(currentDoctor => currentDoctor.id == id);
    if(this.doctors.length > 0)
    {
      this.doctorService.deleteDoctor(doctorsToBeDeleted[0].id)
          .subscribe(() => this.getDoctors());
    }
  }

  add(id:string,firstName:string, lastName:string)
  {
    const doctor = {
      id: Number.parseInt(id),
      firstName: firstName,
      lastName: lastName,
      pacientIds: []
    } as Doctor
    this.doctorService
        .addDoctor(doctor)
        .subscribe(doctor => {
          this.doctors.push(doctor);
          this.getDoctors();
        });
    
  }
}
