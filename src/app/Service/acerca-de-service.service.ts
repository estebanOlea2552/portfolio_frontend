import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AcercaDe } from '../Model/acerca-de';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeServiceService {

  URL = environment.URL + "acercade/";

  constructor(private http: HttpClient) { }

  public list(): Observable<AcercaDe[]>{
    return this.http.get<AcercaDe[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<AcercaDe>{
    return this.http.get<AcercaDe>(this.URL + `detail/${id}`);
  }

  public save(acercaDe: AcercaDe): Observable<any>{
    return this.http.post<any>(this.URL + 'create', acercaDe);
  }

  public update(id: number, acercaDe: AcercaDe): Observable<any>{
    return this.http.put<any>(this.URL + `update/${id}`, acercaDe);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }
}
