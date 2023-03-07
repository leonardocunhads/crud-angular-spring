import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses: Course[] = [];
  displayedColumns = ['name', 'category'];

  courseService: CourseService;

  constructor() {
    this.courseService = new CourseService();
    this.courses = this.courseService.listAll();
  }
}
