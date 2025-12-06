import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-directory',
  imports: [FormsModule],
  templateUrl: './employee-directory.html',
  styleUrl: './employee-directory.css',
})
  
export class EmployeeDirectory {
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

  // employee list
  employeeList: any[] = [
    {
      imgpic: '/placeholderpic.svg',
      employeeNum: 100,
      name: 'Antonio',
      title: 'title1',
      gender: 'gender1',
      email: 'email1',
      employStatus: 'permanent1',
      salary: 1000
    },
    {
      imgpic: '/placeholderpic.svg',
      employeeNum: 200,
      name: 'Name2',
      title: 'title2',
      gender: 'gender2',
      email: 'email2',
      employStatus: 'permanent2',
      salary: 2000
    },
    {
      imgpic: '/placeholderpic.svg',
      employeeNum: 300,
      name: 'Name3',
      title: 'title3',
      gender: 'gender3',
      email: 'email3',
      employStatus: 'permanent3',
      salary: 3000
    },
    {
      imgpic: '/placeholderpic.svg',
      employeeNum: 100,
      name: 'Name1',
      title: 'title1',
      gender: 'gender1',
      email: 'email1',
      employStatus: 'permanent1',
      salary: 1000
    },
    {
      imgpic: '/placeholderpic.svg',
      employeeNum: 200,
      name: 'Name2',
      title: 'title2',
      gender: 'gender2',
      email: 'email2',
      employStatus: 'permanent2',
      salary: 2000
    },
    {
      imgpic: '/placeholderpic.svg',
      employeeNum: 300,
      name: 'Name3',
      title: 'title3',
      gender: 'gender3',
      email: 'email3',
      employStatus: 'permanent3',
      salary: 3000
    },
    {
      imgpic: '/placeholderpic.svg',
      employeeNum: 100,
      name: 'Name1',
      title: 'title1',
      gender: 'gender1',
      email: 'email1',
      employStatus: 'permanent1',
      salary: 1000
    },
    {
      imgpic: '/placeholderpic.svg',
      employeeNum: 200,
      name: 'Name2',
      title: 'title2',
      gender: 'gender2',
      email: 'email2',
      employStatus: 'permanent2',
      salary: 2000
    },
    {
      imgpic: '/placeholderpic.svg',
      employeeNum: 300,
      name: 'Name3',
      title: 'title3',
      gender: 'gender3',
      email: 'email3',
      employStatus: 'permanent3',
      salary: 3000
    },


  ]
}
