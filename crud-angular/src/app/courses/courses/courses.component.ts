import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  constructor(private courseService: CourseService) {
    this.courses = this.courseService
      .listAll()
      .pipe(tap((courses) => console.log(courses)));
  }
}
