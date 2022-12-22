import { Component, Input, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErroDialogComponent } from '../erro-dialog/erro-dialog.component';

@Component({
  selector: 'app-sucesso-dialog',
  templateUrl: './sucesso-dialog.component.html',
  styleUrls: ['./sucesso-dialog.component.css'],
})
export class SucessoDialogComponent implements OnInit {
  
  constructor(public dialogRef: MatDialogRef<ErroDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {}
}
