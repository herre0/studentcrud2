import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { studentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student = new Student();
  submitted = false;

  constructor(private studentservice: studentService, private router: Router) { }

  ngOnInit(): void {
  }

  save() {
    this.studentservice.createStudent(this.student).subscribe(
      data => { this.gotoList(); },
      error => console.log(error)
    );    
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['students']);
  }

}
