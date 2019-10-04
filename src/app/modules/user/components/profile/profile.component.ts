import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
  }

}
