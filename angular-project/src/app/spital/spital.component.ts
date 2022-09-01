import { Component, OnInit } from '@angular/core';
import { Spital } from '../models/spital';
import { SpitalService } from '../services/spital.service';

@Component({
  selector: 'app-spital',
  templateUrl: './spital.component.html',
  styleUrls: ['./spital.component.css']
})
export class SpitalComponent implements OnInit {

  hospitals: Spital[] = [];
  constructor(private spitalService: SpitalService) { }

  ngOnInit(): void {
  }

  getHospitals(): void{
    this.spitalService.getHospitals()
    .subscribe(hospitals => this.hospitals = hospitals);
  }

  delete(id: Number): void{
    const hospitalsToBeDeleted = this.hospitals.filter(currentHospital => currentHospital.id == id);
    if(this.hospitals.length > 0)
    {
        this.spitalService.deleteHospital(hospitalsToBeDeleted[0].id)
        .subscribe(() => this.getHospitals());
    }
  }

  add(id: string, name:string)
  {
    const spital = {
      id: Number.parseInt(id),
      name: name,
      doctorIds: []
    } as Spital
    this.spitalService.addHospital(spital)
    .subscribe(spital => {
      this.hospitals.push(spital);
      this.getHospitals();
    })
  }
}
