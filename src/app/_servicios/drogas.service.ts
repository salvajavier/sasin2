import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Subject, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Droga } from '../_modelos/droga';

interface HttpResponses {
  message: string;
  result: object;
  }

@Injectable({
  providedIn: 'root'
})



export class DrogasService {

  formularioNuevaDroga = true;
  resultado: Subject< {message: string, result: object }> = new Subject();
  dataDroga;
  idSeleccionado;
  datosDrogaEditada: Subject<Droga> = new Subject();


  constructor(private http: HttpClient) { }



  guardarDroga(dataDroga: Droga): Observable <HttpResponses> {
    this.http.post<HttpResponses>('http://localhost:3000/api/drogas', dataDroga).subscribe(res => {
      this.resultado.next(res);
      this.getDrogas();
    }, error => {
      this.resultado.next({message: 'Ocurrio un error', result: null});
    });
    return;
  }

  actualizarDroga(dataDroga: Droga): Observable <HttpResponses> {
    this.http.post<HttpResponses>('http://localhost:3000/api/drogas', dataDroga._id).subscribe(res => {
      this.resultado.next(res);
      this.getDrogas();
    }, error => {
      this.resultado.next({message: 'Ocurrio un error', result: null});
    });
    return;
  }

  getDrogas(): Observable <HttpResponses> {
    this.http.get<Droga>('http://localhost:3000/api/drogas').subscribe(res => {
      this.dataDroga = res;
    }, error => {
      console.log(error);
    });
    return;
  }

  getDroga(idSeleccionado): Observable <HttpResponses> {
    this.http.get<{message: string, result: Droga}>('http://localhost:3000/api/drogas/' + idSeleccionado).subscribe(res => {
      this.datosDrogaEditada.next(res.result);
    }, error => {
      console.log(error);
    });
    return;
  }

  eliminarDroga(idSeleccionado): Observable <HttpResponses> {
    this.http.delete<HttpResponses>('http://localhost:3000/api/drogas/' + idSeleccionado).subscribe(res => {
    console.log(res);
    this.resultado.next(res);
    this.getDrogas();
    }, error => {
      console.log(error)
      this.resultado.next({message: 'Ocurrio un error', result: null});

    });
    return;
  }


}

