import { MFCsnackbarService } from './../services/mfcsnackbar.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

export interface AuthResponseData {
  rs: {
    token: string;
  };
  sc: number;
}
@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<User | null>(null);
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private _snackbarService: MFCsnackbarService
  ) {}
  signIn(
    credential: {
      lang: string;
      userName: string;
      userPassword: string;
      // lang: 'AR',
      // userName: 'cdiadmin',
      // userPassword: 'P@ssw0rd',
    },
    rememberMe: boolean
  ) {
    return this.httpClient
      .post<AuthResponseData>(
        'http://eblaepm.no-ip.org:9092/cdi/api/v1/auth/internal/login',
        credential
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          const user = new User(credential.userName, resData.rs.token);
          // console.log(user);
          this.user.next(user);
          if (rememberMe)
            localStorage.setItem(
              'userInfo',
              JSON.stringify({ username: user.username, token: user.token })
            );
        })
      );
  }

  logout() {
    this._snackbarService.success({
      message: 'تم تسجيل الخروج بنجاح',
      action: 'حسناً',
    });
    this.user.next(null);
    this.router.navigate(['/login']);
    localStorage.removeItem('userInfo');
  }
  autoLogin() {
    const userInfo = localStorage.getItem('userInfo') as string;
    const user: User = JSON.parse(userInfo);
    console.log('auto login', user);
    if (!user) return;
    this._snackbarService.info({
      message: `سجل الدخول في وقت سابق ${user?.username} `,
      action: 'حسناً',
    });
    this.user.next(user);
    this.router.navigate(['/home']);
  }
  handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An Unknown Error Occurred!';
    this._snackbarService.error({
      message: 'حدث خطأ الرجاء المحاولة لاحقاً',
      action: 'حسناً',
    });
    if (!errorRes.error || !errorRes.error.console.error)
      return throwError(errorMessage);
    switch (errorRes.error.error.message) {
      case 'Error':
        errorMessage = 'error occurred!';
    }
    return throwError(() => new Error(errorMessage));
  }
}
