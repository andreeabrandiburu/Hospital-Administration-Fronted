import { Component, OnInit } from '@angular/core';
import { Address } from '../models/address';
import { Pacient } from '../models/pacient';
import { PacientService } from '../services/pacient-service';

@Component({
  selector: 'app-pacient',
  templateUrl: './pacient.component.html',
  styleUrls: ['./pacient.component.css']
})
export class PacientComponent implements OnInit {

  pacients: Pacient[] = [];
  constructor(private pacientService: PacientService) { }

  ngOnInit(): void {
    this.getPacients();
  }

  getPacients(): void {
    this.pacientService.getPacients()
    .subscribe(pacients => this.pacients = pacients);
  }

  add(id: string,firstName: string, lastName: string, disease: string, addressId: string, streetName: string, streetNumber: string): void {
        const address = {
        id: Number.parseInt(addressId),
        streetName: streetName,
        streetNumber: Number.parseInt(streetNumber)
    } as Address;
    this.pacientService.addPacient({
      id: Number.parseInt(id),
      firstName: firstName,
      lastName: lastName,
      disease: disease,
      address: address

    } as Pacient)
    .subscribe(pacient => {
      this.pacients.push(pacient);
      this.getPacients();
    })
  }
  delete(id: Number): void {
    const pacientsToBeDeleted = this.pacients.filter(currentPacient => currentPacient.id == id);
    if(this.pacients.length > 0) {
      this.pacientService.deletePacient(pacientsToBeDeleted[0].id)
      .subscribe(a =>
        this.getPacients());
    }
  }
}
