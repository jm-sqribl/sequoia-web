import { A2CardComponent } from '../a2-components/card/card.component';
import { CardModule } from '../a2-components/card/card.module';
import {NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import {UserDetailComponent}  from './user-detail/user-detail.component';
import {UserListComponent}  from './user-list/user-list.component';
import {UserService} from './shared/user.service';
import {FormStatusModule} from '../shared/widgets/form-status/form-status.module';
import { UserRoutingModule } from './user-routing.module';

import { DialogResultComponent }   from '../pages/material-components/dialog/dialog.component';


@NgModule({
  declarations: [ 
    UserDetailComponent,
    UserListComponent,
    DialogResultComponent
  ],
    imports: [
    CardModule,
    FormsModule,
    CommonModule,
    FormStatusModule,
    ReactiveFormsModule,
    HttpModule,
    UserRoutingModule,
    NgbModule.forRoot()
  ],
  entryComponents: [
    DialogResultComponent
  ],
  exports:      [ UserDetailComponent,UserListComponent ],
  providers:    [UserService]
})
export class UserModule { }