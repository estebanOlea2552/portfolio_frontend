import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Encabezado } from '../Model/encabezado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncabezadoService {

  URL = environment.URL + "encabezado/";

  constructor(private http: HttpClient) { }

  public list(): Observable<Encabezado[]>{
    return this.http.get<Encabezado[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Encabezado>{
    return this.http.get<Encabezado>(this.URL + `detail/${id}`);
  }

  public save(encabezado: Encabezado): Observable<any>{
    return this.http.post<any>(this.URL + 'create', encabezado);
  }

  public update(id: number, encabezado: Encabezado): Observable<any>{
    return this.http.put<any>(this.URL + `update/${id}`, encabezado);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }
}
