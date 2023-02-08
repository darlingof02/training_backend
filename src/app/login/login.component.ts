import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/interfaces/simpleInterfaces';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string | null = null;
  password: string | null = null;
 
  constructor(private router: Router, private authService: AuthService) {

  }

  public login(user:User) {
    // let  user = {
    //   username: this.username,
    //   password: this.password
    // };

    console.log(user)
    // console.log("login function")
    // let user: User;
    // user.password = 
    this.authService.login(user)
    .subscribe((next) => {
      this.router.navigate(['/home']);
    }
    );
  }

  

  ngOnInit(): void {
    // console.log("login page")
  }

}
