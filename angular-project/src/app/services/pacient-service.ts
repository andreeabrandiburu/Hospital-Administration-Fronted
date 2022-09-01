import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl, httpHeaders } from '../contats/constants';
import { Pacient } from '../models/pacient';

@Injectable({
  providedIn: 'root'
})
export class PacientService {

  constructor(private http: HttpClient) { }

  public getPacients(): Observable<Pacient[]> {
    return this.http.get<Pacient[]>(`${baseUrl}/pacient`, httpHeaders);
  }

  public getPacient(id: number): Observable<Pacient> {
    return this.http.get<Pacient>(`${baseUrl}/pacient/${id}`, httpHeaders);
  }

  public updatePacient(pacient: Pacient): Observable<any> {
    return this.http.put(`${baseUrl}/pacient`, pacient, httpHeaders);
  }

  public addPacient(pacient: Pacient): Observable<Pacient> {
    return this.http.post<Pacient>(`${baseUrl}/pacient`, pacient, httpHeaders);

  }

  public deletePacient(id: number): Observable<Number> 
  {
    return this.http.delete<Number>(`${baseUrl}/pacient/${id}`, httpHeaders);
  }
  
}
