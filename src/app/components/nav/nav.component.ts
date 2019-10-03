import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isLoggedInUser: boolean;
  loggedInUser: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.userLoggedIn().subscribe(user => {
      if (user) {
        this.authService.user$.subscribe(u => this.loggedInUser = u);
        this.isLoggedInUser = true;
      } else {
        this.loggedInUser = undefined;
        this.isLoggedInUser = false;
      }
    });
  }


  logout() {
    this.authService.logout();
  }
}
