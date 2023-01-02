import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpErrorHandlerService } from 'src/app/services/http-error-handler.service';
import { DialogService } from 'src/app/services/dialog.service';
import { UtilsService } from 'src/app/services/util.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public usuarioForm!: FormGroup;
  public hidePassword: boolean = true;

  constructor(
    private authService: AuthService,
    private dialogService: DialogService,
    private httpErroService: HttpErrorHandlerService,
    private utilsService: UtilsService
  ) {}

  public ngOnInit(): void {
    this.usuarioForm = new FormGroup({
      nome: new FormControl('Teste', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.usuarioForm.controls[controlName].hasError(errorName);
  };

  public criaUsuario(): void {
    this.authService
      .register(
        this.usuarioForm.value.email,
        this.usuarioForm.value.password,
        this.usuarioForm.value.nome
      )
      .subscribe({
        next: (data) => {
          this.dialogService.showSucessoDialog('Novo usuário cadastrado com sucesso', this.utilsService.navigateToHome);
        },
        error: (err) => {
          this.httpErroService.handleError(err, this.utilsService.navigateToHome);
          
        },
      });
  }

  public navigateToHome() {
    this.utilsService.navigateToHome();
  }

}
