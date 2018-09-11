import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  dummyName: string = 'anu';
  dummyPassword: string = '123';

  login = (requestJson:any) : (Observable<boolean>) => {
    if(requestJson.username === this.dummyName && requestJson.password === this.dummyPassword){
      return of(true);
    }
    return of(false);
  }

}
