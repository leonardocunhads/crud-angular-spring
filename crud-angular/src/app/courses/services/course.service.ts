import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private readonly API = '/assets/acourses.json';
  constructor(private httpClient: HttpClient) {}

  listAll() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(),
      tap((courses) => console.log(courses))
    );
  }
}
