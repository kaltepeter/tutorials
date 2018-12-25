import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstructorService } from './../instructor/instructor.service';
import { Instructor } from './../instructor/instructor';
import { Location } from '@angular/common';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-new-instructor',
  templateUrl: './new-instructor.component.html',
  styleUrls: ['./new-instructor.component.css']
})
export class NewInstructorComponent implements OnInit {

  instructor: Instructor;

  constructor(private router: Router, private location: Location, private instructorService: InstructorService) {}

  ngOnInit() {}

  addInstructor(data) {
    this.instructorService.addInstructor(data)
      .subscribe(data => {
        this.goBack();
      },
        err => console.log(err));
  }

  goBack() {
    this.location.back();
  }

}
