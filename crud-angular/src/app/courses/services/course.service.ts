import { Injectable } from '@angular/core';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  listAll(): Course[] {
    return [
      { _id: '1', name: 'Angular', category: 'Front-End' },
      { _id: '2', name: 'React', category: 'Front-End' },
      { _id: '3', name: 'Vuejs', category: 'Front-End' },
    ];
  }
}
