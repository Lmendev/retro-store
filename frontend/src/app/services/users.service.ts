import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';
import Swal from 'sweetalert2'

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
        Swal.fire({
          text: "Usuario creado",
          toast: true,
          icon: 'success',
          position: 'top',
          showConfirmButton: false,
          timer: 2500,
        })
      }else {
        Swal.fire({
          text: res.status,
          toast: true,
          icon: 'error',
          position: 'top',
          showConfirmButton: false,
          timer: 2500,
        })
      }
    });
  }

  getUserById(_id: string){
    return this.http.get<User>(this.route + _id);
  }
}
