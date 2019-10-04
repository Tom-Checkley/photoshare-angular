import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
  newUser: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    if (!this.userName) {
      this.userName = `${ this.firstName } ${ this.lastName }`;
    }
    this.newUser = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      userName: this.userName,
      password: this.password,
      id: undefined
    };
    this.authService.registerUser(this.newUser);
  }


}
