import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  dialogMsg: string;
}
interface DialogTypeIcon {
  [key: string]: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  dialogTypeIcon: DialogTypeIcon = {
    info: 'info_outline',
    success: 'check_circle_outline',
    error: 'error_outline',
    warning: 'warning_outline',
  };
  date = new Date();

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      dialogType: string;
      dialogMsg: string;
      action: 'Ok';
    }
  ) {}
  ngOnInit(): void {
    console.log(this.data);
  }
  onClose(): void {
    this.dialogRef.close();
  }
}
