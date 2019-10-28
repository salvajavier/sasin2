import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { NuevaDrogaComponent } from '../nueva-droga/nueva-droga.component';
import { DrogasService } from 'src/app/_servicios/drogas.service';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-drogas',
  templateUrl: './drogas.component.html',
  styleUrls: ['./drogas.component.css']
})
export class DrogasComponent implements OnInit, OnDestroy {

  resultado = new Subscription();

  constructor(public dialog: MatDialog, private snackBar: MatSnackBar, private ds: DrogasService) { }

  ngOnInit() {
    this.resultado = this.ds.resultado.subscribe(res => {
       if (res) {
            this.openSnackBar(res.message); } else {
            this.openSnackBar(res.message);
    }
  }); }

  ngOnDestroy() {
    this.resultado.unsubscribe();
  }

  openDialogNuevaDroga(): void {
    const dialogRef = this.dialog.open(NuevaDrogaComponent, {
      width: '1200px',
      height: '950px',
      disableClose: true
    });
}

  openSnackBar(mensaje) {
    this.snackBar.open(mensaje, null , {duration: 2000});
  }

  eliminar() {
    this.ds.eliminarDroga(this.ds.idSeleccionado);
  }

  openDialogEditarDroga(data) {
    const dialogRef = this.dialog.open(NuevaDrogaComponent, {
      width: '1200px',
      height: '950px',
      disableClose: true,
      data
  });
    dialogRef.afterClosed().subscribe(() => {
      this.ds.formularioNuevaDroga = true;
    });
}

  editarDroga() {
    this.ds.getDroga(this.ds.idSeleccionado);
    this.ds.datosDrogaEditada.pipe(first()).subscribe(res => {
      this.openDialogEditarDroga(res);
      this.ds.formularioNuevaDroga = false;
    });


  }



}
