import { Component, Input } from '@angular/core';

@Component({
  selector: 'experience-element',
  standalone: true,
  imports: [],
  templateUrl: './experience-element.component.html',
  styleUrl: './experience-element.component.css'
})
export class ExperienceElementComponent {
  @Input() name!: string;
  @Input() role!: string;
  @Input() year!: string;
  @Input() description!: string;
}
