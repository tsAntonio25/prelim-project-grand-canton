import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-directory',
  imports: [FormsModule, CommonModule],
  templateUrl: './employee-directory.html',
  styleUrl: './employee-directory.css',
})
  
export class EmployeeDirectory {
  // search functions
  searchText: string = "";
  filteredList: any[] = [];

  ngOnInit() {
    this.filteredList = [...this.employeeList]; 
  }

  filterEmployees() {
    const text = this.searchText.toLowerCase().trim();

    this.filteredList = this.employeeList.filter(item =>
      item.name.toLowerCase().includes(text) ||
      item.title.toLowerCase().includes(text) ||
      item.employStatus.toLowerCase().includes(text) ||
      item.employeeNum.toString().includes(text)
    );
  }

  // pop up
  selectedEmployee: any = null;

  openPopup(employee: any) {
    this.selectedEmployee = employee;
  }

  closePopup() {
    this.selectedEmployee = null;
  }

  // employee list
  employeeList: any[] = [
    {
      imgpic: '/employeepics/employee1.jpg',
      employeeNum: 3258752,
      name: 'Manuel Horizon',
      title: 'Human Resources Staff',
      gender: 'Male',
      email: 'mh123@mail.com',
      employStatus: 'Full-Time',
      salary: 20500
    },
    {
      imgpic: '/employeepics/employee2.jpg',
      employeeNum: 13548093,
      name: 'Haley Cunanan',
      title: 'Accountant',
      gender: 'Female',
      email: 'haleyc22@mail.com',
      employStatus: 'Full-Time',
      salary: 33000
    },
    {
      imgpic: '/employeepics/employee3.jpg',
      employeeNum: 5492157,
      name: 'Riza Daezone',
      title: 'Accountant',
      gender: 'Female',
      email: 'rzzd44231@mail.com',
      employStatus: 'Full-Time',
      salary: 33000
    },
    {
      imgpic: '/employeepics/employee4.jpg',
      employeeNum: 34698232,
      name: 'Claire Macapagal',
      title: 'Receptionist',
      gender: 'Female',
      email: 'clairemcpgl133@mail.com',
      employStatus: 'Full-Time',
      salary: 18000
    },
    {
      imgpic: '/employeepics/employee5.jpg',
      employeeNum: 46972651,
      name: 'Mark Bondoc',
      title: 'Receptionist',
      gender: 'Male',
      email: 'mrkyy78@mail.com',
      employStatus: 'Full-Time',
      salary: 18000
    },
    {
      imgpic: '/employeepics/employee6.jpg',
      employeeNum: 54682721,
      name: 'Namida Lee',
      title: 'Staff',
      gender: 'Female',
      email: 'nml56@mail.com',
      employStatus: 'Part-Time',
      salary: 10000
    },
    {
      imgpic: '/employeepics/employee7.jpg',
      employeeNum: 566873,
      name: 'Joseph Mon',
      title: 'Staff',
      gender: 'Male',
      email: 'mon998@mail.com',
      employStatus: 'Part-Time',
      salary: 10000
    },
    {
      imgpic: '/employeepics/employee8.jpg',
      employeeNum: 6937583,
      name: 'Anton Clinton',
      title: 'Staff',
      gender: 'Male',
      email: 'antonclnt88@mail.com',
      employStatus: 'Part-Time',
      salary: 10000
    },
    {
      imgpic: '/employeepics/employee9.jpg',
      employeeNum: 69348568,
      name: 'Maria Flores',
      title: 'Staff',
      gender: 'Female',
      email: 'mf10@mail.com',
      employStatus: 'Part-Time',
      salary: 10000
    },


  ]
}
