import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category','actions'];

  constructor(
    private courseService: CourseService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute, // usado para acessar a rota que já está sendo utilizada
    ) {
    this.courses$ = this.courseService.listAll().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar cursos.');
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  onAdd(){
    // new pode ser utilizado por conta do ActivatedRoute
    // sem o ActivatedRoute,  rota seria 'courses/new'
    this.router.navigate(['new'],{relativeTo: this.route});
    console.log(this.router.url);
  }
}
