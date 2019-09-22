import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';


import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/classes/user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user$: Observable<User>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  getProfile() {
    const id = this.
  }

}
