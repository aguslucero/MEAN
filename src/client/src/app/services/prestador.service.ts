import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Prestador } from '../Prestador' ;

@Injectable()
export class PrestadorService {
  domain: string = 'http://localhost:3000';
  // domain: string = 'www.mydomainapi.com/';

  constructor(private http: HttpClient) {
  }
  
  getPrestadores() {
    return this.http.get<Prestador[]>(`${this.domain}/api/prestadores`)
    .pipe(map(res => res));
  }
 
  addPrestador(newPrestador: Prestador) {
    return this.http.post<Prestador>(`${this.domain}/api/prestadores`, newPrestador)
    .pipe(map(res => res));;
  }

  deletePrestador(id) {
    return this.http.delete<Prestador>(`${this.domain}/api/prestadores/${id}`)
    .pipe(map(res => res));
  }

  
}