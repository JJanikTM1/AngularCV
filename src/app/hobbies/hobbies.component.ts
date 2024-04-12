import { Component, Input } from '@angular/core';
import { DatabaseService } from '../database.service';
import { NgFor } from "@angular/common";

@Component({
  selector: 'hobbies',
  standalone: true,
  imports: [NgFor],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css'
})
export class HobbiesComponent {
  constructor(
    private database: DatabaseService
  ){}
  data = this.database.hobbies
  @Input() lang!: number;
}
