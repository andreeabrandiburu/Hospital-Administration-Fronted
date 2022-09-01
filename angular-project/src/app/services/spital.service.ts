import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl, httpHeaders } from '../contats/constants';
import { Spital } from '../models/spital';

@Injectable({
  providedIn: 'root'
})
export class SpitalService {

  constructor(private http:HttpClient) { }

  public getHospitals(): Observable<Spital[]>{
    return this.http.get<Spital[]>(`${baseUrl}/spital`, httpHeaders);
  }

  public getHospital(id: number): Observable<Spital> {
    return this.http.get<Spital>(`${baseUrl}/spital/${id}`, httpHeaders);
  }

  public updateHospital(hospital: Spital): Observable<any>{
    return this.http.put(`${baseUrl}/spital`, hospital, httpHeaders);
  }
  
  public addHospital(hospital: Spital): Observable<Spital>{
    return this.http.post<Spital>(`${baseUrl}/spital`, hospital, httpHeaders);
  }

  public deleteHospital(id: Number): Observable<Number>
  {
    return this.http.delete<Number>(`${baseUrl}/spital/${id}`, httpHeaders);
  }
}
