import { Component, Inject } from '@angular/core';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
interface SnackBarTypeIcon {
  [key: string]: string;
}
@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
})
export class SnackbarComponent {
  snackBarTypeIcon: SnackBarTypeIcon = {
    info: 'info_outline',
    success: 'check_circle_outline',
    error: 'error_outline',
    warning: 'warning_outline',
  };
  date = new Date();
  constructor(
    public snackBarRef: MatSnackBarRef<SnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {}
  onDismiss() {
    this.snackBarRef.dismiss();
  }
  onAction() {
    this.snackBarRef.dismissWithAction();
  }
}
