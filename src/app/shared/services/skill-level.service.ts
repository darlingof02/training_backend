import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map, Observable } from 'rxjs';
import { SkillLevel } from '../interfaces/simpleInterfaces';
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

  public addNewSkillLevel(skillLevel: SkillLevel): Observable<any> {
    return this.http.post(this.API_URL + "/skillLevel", skillLevel, this.authService.getJWTHeader())
    .pipe(
      map((res) => {
        return res;
      })
    )
  }

  
}
