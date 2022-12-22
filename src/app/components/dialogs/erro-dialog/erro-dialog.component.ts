import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
 
@Component({
  selector: 'app-erro-dialog',
  templateUrl: './erro-dialog.component.html',
  styleUrls: ['./erro-dialog.component.css']
})
export class ErroDialogComponent implements OnInit {
 
  constructor(public dialogRef: MatDialogRef<ErroDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
 
  ngOnInit() {
  }
 
  public closeDialog = () => {
    this.dialogRef.close();
  }
}