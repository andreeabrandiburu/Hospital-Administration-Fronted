import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.css']
})
export class DoctorDetailComponent implements OnInit {

  doctorForm = new FormGroup({
    id: new FormControl('', Validators.compose([Validators.required])),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    pacientIds: new FormArray([
      new FormControl('')
    ])
  })

  pacientsIdsFinal:number[] = []
  
  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorService,
    private location: Location) { }

  ngOnInit(): void {
    this.getDoctor();
  }

  getPacientsIds(){
    return this.pacientsIdsFinal;
  }
  addPacient(pacientId:string){
    this.pacientsIdsFinal.push(Number.parseInt(pacientId));
    const formArray = this.doctorForm.get('pacientIds') as FormArray;
    formArray.push(new FormControl(pacientId));
  }

  

  getDoctor(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.doctorService.getDoctor(id)
    .subscribe(doctor => {
        const pacientIdsFinal = [];
        this.pacientsIdsFinal = []
        for(let doc of doctor.pacientIds){
            pacientIdsFinal.push(new FormControl(`${doc}`));
            this.pacientsIdsFinal.push(doc);
        }
        this.doctorForm = new FormGroup({
          id: new FormControl(`${doctor?.id}`, Validators.compose([Validators.required])),
          firstName: new FormControl(`${doctor.firstName}`, Validators.compose([Validators.required])),
          lastName: new FormControl(`${doctor.lastName}`, Validators.compose([Validators.required])),
          pacientIds: new FormArray(pacientIdsFinal)
        })
    }) 
    
  }
  goBack(): void {
    this.location.back();
  }
  save(doctorForm: FormGroup): void {
    const doctor = {
      id: doctorForm.get("id")?.value,
      firstName: doctorForm.get("firstName")?.value,
      lastName: doctorForm.get("lastName")?.value,
      pacientIds: this.pacientsIdsFinal
    }
    this.doctorService.updateDoctor(doctor)
    .subscribe(()=> this.location.back())
  }
  
}
