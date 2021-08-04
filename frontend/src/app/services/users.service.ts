import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  selectedUser: User = {
    userName: '',
    email: '',
    password: ''
  };

  constructor(private http: HttpClient) { 

  
  }
}
