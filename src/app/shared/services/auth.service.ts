import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, Observable, Subject } from 'rxjs';
import { User } from '../interfaces/simpleInterfaces';
import { AppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = AppConfig.API_URL;

  loggedIn: Subject<boolean>  = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  login(user: User): Observable<any> {
    
    return this.http.post(this.API_URL + "/authenticate", user, {observe: 'response'})
    .pipe(

      map((res) => {
      if (res.body != null) {
        var obj: {[token: string]: any} = res.body;
        this.saveJWTToken(obj['token']);
      }
      this.loggedIn.next(res.ok);
      return res;

    }),
      catchError((err)=> {
        console.log("status " + err.ok);
        return err;
      })
    );
  }

  getJWTToken(): string {
    return localStorage.getItem("JWT_TOKEN")??"";
  }

  removeJWTToken(): void {
    localStorage.setItem("JWT_TOKEN", "");
  }

  saveJWTToken(JWT_TOKEN: string): void {
    localStorage.setItem("JWT_TOKEN", JWT_TOKEN);
  }

  getJWTHeader(): any {
    let headers_obj = new HttpHeaders().set("Authorization", "Bearer " + this.getJWTToken());
    let httpOptions = {
      headers: headers_obj
    };
    return httpOptions;
  }
}
