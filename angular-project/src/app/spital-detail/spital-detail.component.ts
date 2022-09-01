import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SpitalService } from '../services/spital.service';

@Component({
  selector: 'app-spital-detail',
  templateUrl: './spital-detail.component.html',
  styleUrls: ['./spital-detail.component.css']
})
export class SpitalDetailComponent implements OnInit {

  spitalForm = new FormGroup({
    id: new FormControl('', Validators.compose([Validators.required])),
    name: new FormControl(''),
    doctorIds: new FormArray([
      new FormControl('')
    ])
  })
  doctorIdsFinal: number[]=[]
  constructor(
    private route: ActivatedRoute,
    private spitalService: SpitalService,
    private location: Location) { }

  ngOnInit(): void {
  }

  getSpital(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.spitalService.getHospital(id)
    .subscribe(spital => {
      const doctorIdsFinal = [];
      this.doctorIdsFinal = []
      for(let sp of spital.doctorIds){
        doctorIdsFinal.push(new FormControl(`${sp}`))
        this.doctorIdsFinal.push(sp)
      }
      this.spitalForm = new FormGroup({
        id: new FormControl(`${spital.id}`, Validators.compose([Validators.required])),
        name: new FormControl(`${spital.name}`, Validators.compose([Validators.required])),
        doctorIds: new FormArray(doctorIdsFinal)
      })
    })
  }

  goBack(): void {
    this.location.back();
  }

  save(spitalForm: FormGroup): void {
    const spital = {
      id: spitalForm.get("id")?.value,
      name: spitalForm.get("name")?.value,
      doctorIds: this.doctorIdsFinal
    }

    this.spitalService.updateHospital(spital)
    .subscribe(() => this.goBack())
  }

}
