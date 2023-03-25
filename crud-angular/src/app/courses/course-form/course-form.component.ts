import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
// import { ActivatedRoute, Router } from '@angular/router';
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
    // private router: Router,
    // private route: ActivatedRoute,
    private courseService: CourseService,
    private location: Location,
    private snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null],
    });
  }

  onSubmit() {
    this.courseService.save(this.form.value).subscribe(
      (result) => {
        this.onSuccess();
      },
      (error) => {
        this.onError();
      }
    );
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Curso Salvo com Sucesso!', '', { duration: 3500 });
    this.onCancel();
  }
  private onError() {
    this.snackBar.open('Erro ao salvar o curso.', '', { duration: 3500 });
  }
}
