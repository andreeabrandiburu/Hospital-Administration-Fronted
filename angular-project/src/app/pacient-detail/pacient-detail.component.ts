import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pacient } from '../models/pacient';
import { PacientService } from '../services/pacient-service';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Address } from '../models/address';

@Component({
  selector: 'app-pacient-detail',
  templateUrl: './pacient-detail.component.html',
  styleUrls: ['./pacient-detail.component.css']
})
export class PacientDetailComponent implements OnInit {
  pacientForm = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl('', Validators.compose([Validators.required])),
    lastName: new FormControl('', ),
    disease: new FormControl('', ),
    address: new FormGroup({
      streetId: new FormControl(''),
      streetName: new FormControl(''),
      streetNumber: new FormControl('')
    })
  });

  constructor(
    private route: ActivatedRoute,
    private pacientService: PacientService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPacient();
  }
  getPacient(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pacientService.getPacient(id)
    .subscribe(pacient => {
      const address = pacient.address;
      this.pacientForm = new FormGroup({
        id: new FormControl(`${pacient?.id}`, Validators.compose([Validators.required])),        
        firstName: new FormControl(`${pacient?.firstName}`, Validators.compose([Validators.required])),
        lastName: new FormControl(`${pacient?.lastName}`, Validators.compose([Validators.required])),
        disease: new FormControl(`${pacient?.disease}`, Validators.compose([Validators.required])),
        address: new FormGroup({
          streetId: new FormControl(`${address.id}`,Validators.compose([Validators.required])),
          streetName: new FormControl(`${address.streetName}`,Validators.compose([Validators.required])),
          streetNumber: new FormControl(`${address.streetNumber}`, Validators.compose([Validators.required]))
        })
        
      });
    });
  }

  goBack(): void{
    this.location.back();
  }
  save(pacientForm: FormGroup): void{
    const address = {
      id: Number.parseInt(pacientForm.get("address.streetId")?.value),
      streetNumber: Number.parseInt(pacientForm.get("address.streetNumber")?.value),
      streetName: pacientForm.get("address.streetName")?.value
    } as Address
    const pacient = {
        id: pacientForm.get("id")?.value,
        lastName: pacientForm.get("firstName")?.value,
        firstName: pacientForm.get("lastName")?.value,
        disease: pacientForm.get("disease")?.value,
        address: address
    } as Pacient;
    this.pacientService.updatePacient(pacient)
    .subscribe(() => this.goBack())
  }
}
