import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NuevaDrogaComponent } from '../nueva-droga/nueva-droga.component';

@Component({
  selector: 'app-drogas',
  templateUrl: './drogas.component.html',
  styleUrls: ['./drogas.component.css']
})
export class DrogasComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialogNuevaDroga(): void {
    const dialogRef = this.dialog.open(NuevaDrogaComponent, {
      width: '1200px',
      height: '950px',
      disableClose: true
    });

}
}
