import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import {UserService}                from '../shared/user.service';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { User }        from '../user';


@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
    users: User[];
    
    constructor(public dialog: MdDialog, private _userService: UserService) { }
    
    ngOnInit() {
        console.log('Init user list compn');
        this.getUsers();
    }
  
    openDialog() {
      this.dialog.open(DialogResultComponent);
    }
    
    getUsers() {
        console.log('GETTING USERS');
        this._userService.getUsers().subscribe(
          users => this.users = users,
            err => {
                console.log(err);
            }
          // No error or completion callbacks here. They are optional, but
          // you will get console errors if the Observable is in an error state.
        );
    }
}

@Component({
  selector: 'dialog-result',
  templateUrl: '../../pages/material-components/dialog/dialog-result.html',
})
export class DialogResultComponent {
  jazzMessage = 'Jazzy jazz jazz';
  constructor(public dialogRef: MdDialogRef<DialogResultComponent>) {}
}