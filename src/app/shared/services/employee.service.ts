import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from '../interfaces/simpleInterfaces';
import { AppConfig } from './app.config';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private API_URL = AppConfig.API_URL;

  constructor(private http: HttpClient, private authService: AuthService) {  }

  public getAllEmployees(): Observable<any> {
    return this.http.get(this.API_URL + "/employee", this.authService.getJWTHeader())
    .pipe(
      map((res) => {
        // console.log(res)
        return res;
      })
    );
  }

  public addANewEmployee(employee: Employee): Observable<any> {
    return this.http.post(this.API_URL + "/employee", employee, this.authService.getJWTHeader())
    .pipe(
      map((res) => {
        return res;
      })
    )
  }

  public removeAEmployee(employeeID: string): Observable<any> {
    return this.http.delete(this.API_URL + "/employee/" + employeeID, this.authService.getJWTHeader())
    .pipe(
      map((res) => {
        return res;
      })
    );
  }

  public updateAnEmployee(employee: Employee, employeeID: string): Observable<any> {
    return this.http.put(this.API_URL + "/employee/" + employeeID, employee, this.authService.getJWTHeader())
    .pipe(
      map((res) => {
        return res;
      })
    )
  }
}
