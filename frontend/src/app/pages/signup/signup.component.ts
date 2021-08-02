import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({  
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UsersService]
})
export class SignupComponent implements OnInit {
  
  constructor(private UsersService: UsersService ) { }

  ngOnInit(): void {
  }
}
