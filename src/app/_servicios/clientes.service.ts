import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { IntCliente } from '../_modelos/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  private clientes: IntCliente[];
  private clientesUpdated = new Subject <IntCliente[]>();

  getClientes() {
     this.http.get<{message: string, data: IntCliente[]}>('http://localhost:3000/api').subscribe((data) => {
      this.clientes = data.data;
      this.clientesUpdated.next([...this.clientes]);
      console.log ('se hizo el get');
    });
  }

  getClientesUpdatedListener() {
    return this.clientesUpdated.asObservable();
  }

  postClientes(PostData) {
    this.http.post<IntCliente>('http://localhost:3000/api', PostData).subscribe((res) => {
      console.log(res);
      this.getClientes();
    });
  }


}
