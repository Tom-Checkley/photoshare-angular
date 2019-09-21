import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { RegisterService } from 'src/app/services/user/register.service';

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

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  register() {
    if (!this.userName) {
      this. userName = `${ this.firstName } ${ this.lastName }`;
    }
    this.newUser = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      userName: this.userName,
      password: this.password,
      id: undefined
    };
    this.registerService.registerUser(this.newUser);
  }

}
