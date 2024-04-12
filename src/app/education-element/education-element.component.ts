import { Component, Input } from '@angular/core';

@Component({
  selector: 'education-element',
  standalone: true,
  imports: [],
  templateUrl: './education-element.component.html',
  styleUrl: './education-element.component.css'
})
export class EducationElementComponent {
  @Input() name!: string;
  @Input() years!: string;
}
