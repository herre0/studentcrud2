import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { studentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  id: number;
  student: Student;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private studentservice: studentService) { }

  ngOnInit(): void {
    this.student = new Student();
    this.id = this.route.snapshot.params['id'];

    this.studentservice.getStudent(this.id).subscribe(
      data => { this.student = data; },
      error => console.log(error));
  }

  updateStudent() {
    this.studentservice.updateStudent(this.id, this.student).subscribe(
      data => { this.gotoList(); },
      error => console.log(error)
    );
  }

  onSubmit() {
    this.updateStudent();
    this.submitted = true;
  }

  gotoList() {
    this.router.navigate(['students']);
  }

}
