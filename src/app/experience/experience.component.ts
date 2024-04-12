import { Component, Input } from '@angular/core';
import { DatabaseService } from '../database.service';
import { NgFor } from '@angular/common';
import { ExperienceElementComponent } from '../experience-element/experience-element.component';

@Component({
  selector: 'experience',
  standalone: true,
  imports: [NgFor, ExperienceElementComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  constructor(
    private database: DatabaseService
  ){}
  data = this.database.experience
  @Input() lang!: number;
}
