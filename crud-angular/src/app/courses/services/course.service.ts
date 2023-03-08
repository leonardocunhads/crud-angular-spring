import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private readonly API = '/assets/courses.json';
  constructor(private httpClient: HttpClient) {}

  listAll() {
    return this.httpClient.get<Course[]>(this.API);
  }
}
