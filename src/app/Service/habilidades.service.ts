import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Habilidades } from '../Model/habilidades';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  URL = environment.URL + "habilidades/";

  constructor(private http: HttpClient) { }

  public list(): Observable<Habilidades[]>{
    return this.http.get<Habilidades[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Habilidades>{
    return this.http.get<Habilidades>(this.URL + `detail/${id}`);
  }

  public save(habilidades: Habilidades): Observable<any>{
    return this.http.post<any>(this.URL + 'create', habilidades);
  }

  public update(id: number, habilidades: Habilidades): Observable<any>{
    return this.http.put<any>(this.URL + `update/${id}`, habilidades);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }
}
