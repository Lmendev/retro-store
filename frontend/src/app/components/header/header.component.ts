import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuth:boolean = false;
  role:string = '';
  private authListenerSub!: Subscription;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.isAuth = this.authService.getIsAuthenticated();
    this.role = this.authService.getRole();

    this.authListenerSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.isAuth = isAuthenticated;
        this.role = this.authService.getRole();
      });
  }

  logout(): void{
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.authListenerSub.unsubscribe();
  }
}
