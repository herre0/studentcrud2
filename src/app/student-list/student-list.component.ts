import { Component, OnInit } from '@angular/core';
import { studentService } from '../student.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Observable<Student[]>;

  constructor(private studentService: studentService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.students = this.studentService.getStudentList();
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(
      data => { this.reloadData(); },
      error => console.log(error));
  }

  updateStudent(id: number){
    this.router.navigate(['update',id]);
  }

  studentDetails(id:number){
    this.router.navigate(['details',id]);1
  }

}
