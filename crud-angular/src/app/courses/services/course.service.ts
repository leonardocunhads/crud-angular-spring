import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private readonly API = 'api/courses';
  constructor(private httpClient: HttpClient) {}

  listAll() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(),
      tap((courses) => console.log(courses))
    );
  }

  save(course: Course) {
    console.log(course);
    return this.httpClient.post<Course>(this.API, course).pipe(first());
  }
}
