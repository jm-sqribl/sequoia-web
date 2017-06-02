import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Input }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import {UserService} from '../shared/user.service';
import { User } from '../user';

@Component({
    selector: 'user-detail',
    templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {

    user: User;
    userForm: FormGroup;
    errorMessage: String;
    showFader : boolean = false;
    
    constructor(
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private _userService: UserService,
    ) { }

    ngOnInit() {
        console.log("Before tits");
        this.route.params
        .switchMap((params: Params) => this._userService.getUser(+params['id']))
        .subscribe (
            data => {
                this.user = data;
                this.buildForm();
            },
            error => {console.log(error)}
         );
    }

    buildForm(): void {
        
        this.userForm = this.fb.group({
            'firstName': ['', [Validators.required,Validators.minLength(4),Validators.maxLength(24)]],
            'lastName': ['', [Validators.required,Validators.minLength(4),Validators.maxLength(24)]],
            'username': ['', [Validators.required,Validators.minLength(4)]],
        });
        
        this.userForm.patchValue(this.user);
        
        this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));

        this.onValueChanged(); // (re)set validation messages now
        
    }


    onValueChanged(data?: any) {
        if (!this.userForm) { return; }
        const form = this.userForm;

        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);

            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }

    formErrors = {
        'firstName': '',
        'lastName': '',
        'username': ''
    };

    validationMessages = {
        'firstName': {
            'required': 'Name is required.',
            'minlength': 'Name must be at least 4 characters long.',
            'maxlength': 'Name cannot be more than 24 characters long.'
        },
        'lastName': {
            'required': 'Name is required.',
            'minlength': 'Name must be at least 4 characters long.',
            'maxlength': 'Name cannot be more than 24 characters long.'
        },
        'username': {
            'required': 'Name is required.',
            'minlength': 'Name must be at least 4 characters long.',
            'maxlength': 'Name cannot be more than 24 characters long.'
        }
    };
    
    onSubmit() : void {
        
    }
}
