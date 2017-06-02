import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map'

//import 'rxjs/add/operator/toPromise';

import { User } from '../user';

@Injectable()
export class UserService {

    constructor(private http: Http) {  }
    
    // Uses Observable.forkJoin() to run multiple concurrent http.get() requests.
    // The entire operation will result in an error state if any single request fails.
    getUsers() : Observable<User[]> {
        return this.http.get('/api/user/list').map(response => response.json());
        
        //.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
    
    getUser(id: number) : Observable<User> {
        //throw Observable.throw(new Error('error!')); 
        return this.http.get(`/api/user/view/${id}`).map(response => response.json());
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}