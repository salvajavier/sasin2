import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrogasService {

  constructor(private http: HttpClient) { }

  guardarDroga(dataDroga) {
    this.http.post('http://localhost:3000/api', dataDroga).subscribe(res => {
    console.log('funciono')
    });
  }

}
