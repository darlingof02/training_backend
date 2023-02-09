import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EmployeeModalComponent } from './homepage/employee-modal/employee-modal.component';
import { SkillEditComponent } from './skill-edit/skill-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    EmployeeModalComponent,
    SkillEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      
    FormsModule,
    HttpClientModule,
    NgbModule,
   
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
