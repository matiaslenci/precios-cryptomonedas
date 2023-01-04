import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
//Reactive Forms 
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MatTableModule, MatFormFieldModule,MatProgressSpinnerModule,MatInputModule,MatIconModule,FormsModule],
})
export class MaterialModule {}
