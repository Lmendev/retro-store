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
          this.isAuthenticated = true;
          console.log(response)
          const {token, userId, role} = response
          this.token = token;
          this.user_id = userId;
          this.role = role;

          this.authStatusListener.next(true);

          this.saveAuthData(this.token, this.user_id, this.role);

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
    const user_id = localStorage.getItem('user_id');
    const role = localStorage.getItem('role');
    
    if (!token || !user_id || !role) return;
    
    return { token , user_id, role };
  }

  private saveAuthData(token: string, user_id: string, role: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('user_id', user_id);
    localStorage.setItem('role', role);
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('role');
  }

  autoAuthUser(): void{
    const authInfo = this.getAuthData();
    
    if (!authInfo) return;

    this.isAuthenticated = true;
    this.token = localStorage.getItem('token')!;
    this.user_id = localStorage.getItem('user_id')!;
    this.role = localStorage.getItem('role')!;

    this.authStatusListener.next(true);
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
