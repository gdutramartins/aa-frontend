import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ErroDialogComponent } from '../components/dialogs/erro-dialog/erro-dialog.component';
import { DialogService } from './dialog.service';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorHandlerService {
  public errorMessage: string = '';
  constructor(private dialogService: DialogService) {
    
  }

  public handleError = (error: HttpErrorResponse, callback?: () => void) => {
    if (error.status === 500) {
      this.handle500Error(error);
    } else if (error.status === 404) {
      this.handle404Error(error);
    } else {
      this.handleOtherError(error);
    }
  };

  private handle500Error = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
    this.dialogService.showErroDialog('Ocorreu uma falha não esperada em nosso sistema. ' + this.errorMessage);
  };

  private handle404Error = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
    this.dialogService.showErroDialog('Serviço solicitado não encontrado. ' + this.errorMessage);
  };

  private handleOtherError = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
    this.dialogService.showErroDialog(this.errorMessage);
  };

  private createErrorMessage(error: HttpErrorResponse) {
    if (error) {
      if (error.error?.message) {
        this.errorMessage = error.error.message;
      } else {
        this.errorMessage = error.status + " - " + error.statusText;
      }
    }
  }
}
