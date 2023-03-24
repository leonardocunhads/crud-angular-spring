import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../services/course.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService,
    private snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null],
    });
  }

  onSubmit() {
    this.courseService.save(this.form.value).subscribe(
      (result) => console.log(result),
      (error) => {
        this.onError();
      }
    );
  }

  onCancel() {
    this.router.navigate([''], { relativeTo: this.route });
  }

  private onError() {
    this.snackBar.open('Erro ao salvar o curso.', '', { duration: 3500 });
  }
}
