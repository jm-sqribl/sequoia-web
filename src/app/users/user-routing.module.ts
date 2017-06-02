import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDetailComponent }  from './user-detail/user-detail.component';
import { UserListComponent }  from './user-list/user-list.component';

export const userRoutes: Routes = [
   { path: 'user/:id', component: UserDetailComponent },
   { path: 'users', component: UserListComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(userRoutes) ],
  exports: [ RouterModule ]
})
export class UserRoutingModule {}