import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from '../shared/interfaces/simpleInterfaces';
import { EmployeeService } from '../shared/services/employee.service';
import { EmployeeModalComponent } from './employee-modal/employee-modal.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private router: Router, private modalService: NgbModal) {}

  employees: Employee[] = []

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe(
      (res) => {
        this.employees = res;
        console.log(res);
      }
    )
  }

  open(tempEmployee: Employee|null): void {
    const modalRef = this.modalService.open(EmployeeModalComponent);
    modalRef.componentInstance.tempEmployee = tempEmployee;
  }

  deleteAnEmployee(employee: Employee): void {
    this.employeeService.removeAEmployee(employee.employeeID)
    .subscribe(
      (res) => {
        location.reload();
      }
    )
  }
  
  updateAnEmployee(employee: Employee): void {
    this.open(employee);
  }

}
