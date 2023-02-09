import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AppConfig } from './app.config';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SkillLevelService {

  private API_URL = AppConfig.API_URL;

  constructor(private authService: AuthService, private http: HttpClient) { }

  public getAllSkillLevel(): Observable<any> {
    return this.http.get(this.API_URL + "/skillLevel", this.authService.getJWTHeader())
    .pipe(
      map((res) => {
        return res;
      })
    )
  }
}
