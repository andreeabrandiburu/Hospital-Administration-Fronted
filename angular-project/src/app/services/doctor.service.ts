import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl, httpHeaders } from '../contats/constants';
import { Doctor } from '../models/doctor';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  public getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${baseUrl}/doctor`, httpHeaders);
  }

  public getDoctor(id: number): Observable<Doctor> {
    return this.http.get<Doctor>(`${baseUrl}/doctor/${id}`, httpHeaders);
  }
  public updateDoctor(doctor: Doctor): Observable<any> {
    return this.http.put(`${baseUrl}/doctor`, doctor, httpHeaders);
  }
  public addDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(`${baseUrl}/doctor`, doctor, httpHeaders);

  }
  public deleteDoctor(id: Number): Observable<Number>
  {
    return this.http.delete<Number>(`${baseUrl}/doctor/${id}`, httpHeaders);
  }
}
