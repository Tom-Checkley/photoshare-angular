import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserNotFoundComponent } from './components/user-not-found/user-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'profile',
        children: [
          { path: ':id', component: ProfileComponent },
          { path: '', pathMatch: 'full', redirectTo: 'user-not-found' }
        ]
      }
    ]
  },
  { path: 'user-not-found', component: UserNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
