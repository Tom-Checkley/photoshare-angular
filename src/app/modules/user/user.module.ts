import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [UserComponent, ProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }