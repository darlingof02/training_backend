import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/interfaces/simpleInterfaces';
import { EmployeeService } from '../shared/services/employee.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private employeeService: EmployeeService) {}

  employees: Employee[] = []

  ngOnInit(): void {
    
    
    this.employeeService.getAllEmployees().subscribe(
      (res) => {
        this.employees = res;
        console.log(this.employees);
      }
    )
  }

  addANewEmployee(employee: Employee):void {
    
  }
  


}
