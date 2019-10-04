import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserNotFoundComponent } from './components/user-not-found/user-not-found.component';


@NgModule({
  declarations: [
    UserComponent,
    ProfileComponent,
    UserNotFoundComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
