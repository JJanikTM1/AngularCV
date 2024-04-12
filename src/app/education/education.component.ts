import { Component, Input } from '@angular/core';
import { EducationElementComponent } from '../education-element/education-element.component';
import { DatabaseService } from '../database.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'education',
  standalone: true,
  imports: [EducationElementComponent, NgFor],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  constructor(
    private database: DatabaseService
  ){}
  data = this.database.education
  @Input() lang!: number;
}
