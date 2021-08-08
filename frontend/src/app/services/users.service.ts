import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = environment.apiUrl;
  apiVersion = environment.apiVersion;
  endPoint = '/users/';
  route = this.apiUrl + this.apiVersion + this.endPoint;

  constructor(private http: HttpClient) { }

  createUser(user: User){
    console.log(user)
    this.http.post(this.route, user).subscribe((res: any) => {
      if(res.status === "Usuario creado." ){
        console.log("Usuario creado.")
      }else {
        console.log("No se ha podido crear el usuario.")
      }
    });
  }

  getUserById(_id: string){
    return this.http.get<User>(this.route + _id);
  }
}
