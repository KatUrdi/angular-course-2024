import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ScoreComponent } from './score/score.component';
import { ClassmateComponent } from './classmate/classmate.component';
import { AverageComponent } from './average/average.component';
import { ExamService } from './exam.service';


@NgModule({
  declarations: [ScoreComponent, ClassmateComponent, AverageComponent],
  providers: [ExamService],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }