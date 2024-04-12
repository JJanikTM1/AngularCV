import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { GeneralComponent } from './general/general.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EducationComponent, ExperienceComponent, ContactFormComponent, GeneralComponent, HobbiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  lang = 0
}
