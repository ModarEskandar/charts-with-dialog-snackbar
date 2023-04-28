import { Subscription } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  private userSub!: Subscription; // need subscription to get the value
  private isAuthenticated = false;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.userSub = this.authService.user.subscribe((user: User | null) => {
      this.isAuthenticated = !!user;
    });
    this.userSub.unsubscribe();
    if (this.isAuthenticated) return true;
    return this.router.createUrlTree(['/login']);
  }
}
