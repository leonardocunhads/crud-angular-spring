import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

// modulo para organizar todos os imports

@NgModule({
  exports: [MatTableModule, MatCardModule, MatToolbarModule],
})
export class AppMaterialModule {}