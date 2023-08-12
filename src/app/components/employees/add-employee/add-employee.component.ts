import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Employee } from 'src/app/Models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{
  addEmployeeRequest: Employee = {
    id:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:0,
    city:'',
    salary:0,
    department:''

  };
  constructor(private employeeService: EmployeesService, private router: Router) {
  }

  ngOnInit(): void {
  }

  addEmployee() {
    this.employeeService.addEmployee(this.addEmployeeRequest)
    .subscribe({
      next:(employee) => {
        this.router.navigate(['employees']);
      }
    });
    // console.log(this.addEmployeeRequest);
  }
}
