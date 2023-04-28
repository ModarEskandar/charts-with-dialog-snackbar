import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';

@Injectable({
  providedIn: 'root',
})
export class MFCDialogService {
  constructor(public dialog: MatDialog) {}
  openDialog(data: any): MatDialogRef<DialogComponent, any> {
    return this.dialog.open(DialogComponent, {
      data,
      position: data.position ? data.position : {},
    });
  }
  info(data: any): MatDialogRef<DialogComponent, any> {
    data = {
      ...data,
      dialogType: 'info',
      position: { left: '10px', top: '10px' },
    };
    // const dialogRef = this.openDialog(data);
    return this.openDialog(data);
    // dialogRef.afterClosed().subscribe((result) => {
    //   setTimeout(
    //     () =>
    //       this.success({
    //         ...result,
    //         dialogMsg: ' Success dialog!!',
    //         position: { right: '10px', top: '10px' },
    //       }),
    //     1000
    //   );
    // });
  }
  success(data: any): MatDialogRef<DialogComponent, any> {
    data = {
      ...data,
      dialogType: 'success',
    };
    return this.openDialog(data);
  }
  error(data: any): MatDialogRef<DialogComponent, any> {
    data = {
      ...data,
      dialogType: 'error',
    };
    return this.openDialog(data);
  }

  warning(data: any): MatDialogRef<DialogComponent, any> {
    data = {
      ...data,
      dialogType: 'warning',
    };
    // const dialogRef = this.openDialog(data);
    return this.openDialog(data);

    // dialogRef.afterClosed().subscribe((result) => {
    //   setTimeout(
    //     () => this.info({ ...result, dialogMsg: ' Info dialog!!' }),
    //     1000
    //   );
    // });
  }
}
