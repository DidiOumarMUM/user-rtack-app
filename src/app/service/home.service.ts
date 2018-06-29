import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import {Http, Response, Request ,Headers} from '@angular/http';
import {Observable}              from 'rxjs/Observable';
const httpOptions = {
  headers: new Headers({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HomeService {

  constructor(private http :Http ) {}
  getUsers()
  {
    return this.http.get("http://localhost:8080/eTradeREST/users") ; //.catch(this._serverError); ;
  }


  updateUser(user : any )
  {
    let body = JSON.stringify(user);
    return this.http.put("http://localhost:8080/eTradeREST/users/update/"+user.id , body , httpOptions) ;
  }


 /* private _serverError(err: any) {
    console.log('sever error:', err);  // debug
    if(err instanceof Response) {
      return Observable.throw(err.json().error || 'backend server error');
      // if you're using lite-server, use the following line
      // instead of the line above:
      //return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(err || 'backend server error');
}*/
}
