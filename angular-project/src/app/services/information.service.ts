import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  information: string[] = [];
  add(message: string) {
    this.information.push(message);
  }
  clear() {
    this.information = [];
  }
  constructor() { }
}
