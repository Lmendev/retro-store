import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUrl;
  apiVersion = environment.apiVersion;
  endPoint = '/users/login/';
  route = this.apiUrl + this.apiVersion + this.endPoint;

  private token: string = '';
  private isAuthenticated = false;
  private role: string = '';
  private user_id: string = '';

  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string) {
    
    this.http.post(this.route,{ email, password })
      .subscribe((response: any) => {
        console.log(response)
        
        if (response.token) {
          this.token = response.token;
          this.isAuthenticated = true;

          this.authStatusListener.next(true);

          /*const expirationInDuration = response.expiresIn;
          //this.setAuthTimer(expirationInDuration);

          
          this.user_id = response.userId;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(
            now.getTime() + expirationInDuration * 1000
          );
          console.log(expirationDate);
          */
         this.saveAuthData(this.token);
         this.router.navigate(['./store/']);
        }
      });
  }

  logout():void {
    this.token = '';
    this.isAuthenticated = false;
    this.user_id = '';
    
    this.authStatusListener.next(false);
    this.clearAuthData();
    this.router.navigate(['/']);
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    /*const expirationDate = new Date(localStorage.getItem('expiration')!);
    const userId = localStorage.getItem('userId');*/
    
    if (!token /*|| !expirationDate*/) return;
    
    return { token /*, expirationDate, userId */ };
  }

  private saveAuthData(token: string) {
    localStorage.setItem('token', token);
    /*localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('userId', userId);*/
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    /*localStorage.removeItem('expiration');
    localStorage.removeItem('userId');*/
  }

  autoAuthUser(): void{
    const authInfo = this.getAuthData();
    
    if (!authInfo) return;
    
    const now = new Date();
    
    /*const expiresIn = authInfo.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {*/
      this.token = localStorage.getItem('token')!;
      this.isAuthenticated = true;
      this.authStatusListener.next(true);
    //}
  }

  // Getters and setters

  getToken(): string {
    return this.token;
  }

  getUserId(): string {
    return this.user_id;
  }

  getRole(): string {
    return this.role;
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

}
