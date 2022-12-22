import { Injectable } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { ErroDialogComponent } from '../components/dialogs/erro-dialog/erro-dialog.component';
import { SucessoDialogComponent } from '../components/dialogs/sucesso-dialog/sucesso-dialog.component';

const DIALOG_CONFIG_PADRAO = {
  height: '200px',
  width: '400px',
  disableClose: true,
};

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  public showErroDialog(mensagem: String, callback?: () => void) {
    let dialogConfig = {
      data: { mensagem: mensagem },
      ...DIALOG_CONFIG_PADRAO,
    };
    let dialogRef = this.dialog.open(ErroDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (callback) {
        callback();
      }
    });
  }

  public showSucessoDialog(mensagem: String, callback?: () => void) {
    let dialogConfig = {
      data: { mensagem: mensagem },
      ...DIALOG_CONFIG_PADRAO,
    };
    let dialogRef = this.dialog.open(SucessoDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (callback) {
        callback();
      }
    });
  }
}
