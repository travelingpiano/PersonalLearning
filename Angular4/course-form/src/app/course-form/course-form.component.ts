import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormGroup, FormBuilder,Validators,NgForm } from '@angular/forms';


@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CourseFormComponent implements OnInit {
  courseName;
  courseCategory;
  courseCategorys = [
  	{id: 1, name: "Development"},
  	{id: 2, name: "Art"},
  	{id: 3, name: "Languages"}
  ];

  constructor() {
  }

  changeCourse(courseName){
  	this.courseName = courseName;
  	console.log(this.courseName);
  }

  changeCategory(courseCategory){
  	console.log(courseCategory);
  }

  ngOnInit() {
  }

}
