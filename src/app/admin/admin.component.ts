import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../_servicios/clientes.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  opened = true;
  constructor() { }

  ngOnInit() {
  }

}
