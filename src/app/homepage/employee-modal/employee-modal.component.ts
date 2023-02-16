import { AfterViewInit, Component, Input, OnInit, Type, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Employee, EmployeeForm, SkillLevel } from 'src/app/shared/interfaces/simpleInterfaces';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { SkillLevelService } from 'src/app/shared/services/skill-level.service';

@Component({
  selector: 'app-employee-modal',
  templateUrl: './employee-modal.component.html',
  styleUrls: ['./employee-modal.component.css']
})
export class EmployeeModalComponent implements OnInit{

  @Input()
  tempEmployee: Employee|null = null;
  //@ts-ignore
  @ViewChild('loginForm') loginForm: NgForm;

	closeResult = '';

  skills: SkillLevel[] = [];
  employeeStatus: Boolean[] = [true, false];

	constructor(private modalService: NgbModal, private skillLevelService: SkillLevelService, private employService: EmployeeService, public activeModal: NgbActiveModal) {
    
  }

  ngOnInit(): void {
    this.skillLevelService.getAllSkillLevel()
    .subscribe(
      (res) => {
        this.skills = res;
      }
    )
    
    setTimeout(() => {
      if (this.tempEmployee)
        this.loginForm.setValue(this.convertEmployee(this.tempEmployee));
    })
  }

  convertEmployee(employee: any): any {
    let employeeForm: any = {
      firstName: employee.firstName,
      lastName: employee.lastName,
      dob: {
        year: new Date(Date.parse(employee.dob)).getFullYear(),
        month: new Date(Date.parse(employee.dob)).getMonth()+1,
        day: new Date(Date.parse(employee.dob)).getDate(),
      },    
      email: employee.email,
      active: employee.active,
      age: employee.age,
      skillLevelID: employee.skillLevel.skillLevelID
    }
    return employeeForm
  }
  

  convertEmployeeForm(employeeForm: EmployeeForm): any {
    let employee: any = {
      firstName: employeeForm.firstName,
      lastName: employeeForm.lastName,
      dob: new Date(employeeForm.dob.year, employeeForm.dob.month-1, employeeForm.dob.day),
      email: employeeForm.email,
      active: employeeForm.active,
      age: employeeForm.age,
      skillLevel: {
        skillLevelID: employeeForm.skillLevelID,
      }
    }
    return employee;
  }

  addNewEmployee(employeeForm: EmployeeForm) {
    let employee = this.convertEmployeeForm(employeeForm);
    this.employService.addANewEmployee(employee)
    .subscribe(
      (res)=> {
        this.modalService.dismissAll();
        location.reload();
      }
    )
  }

  updateEmployee(employeeForm: EmployeeForm) {
    let employee = this.convertEmployeeForm(employeeForm);
    if (this.tempEmployee) {
      this.employService.updateAnEmployee(employee, this.tempEmployee.employeeID)
      .subscribe(
        (res) => {
          this.modalService.dismissAll();
          location.reload();
        }
      );
    }
  }
}
