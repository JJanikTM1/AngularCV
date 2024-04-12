import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatabaseService } from '../database.service';
import { EmojiPipe } from '../emoji.pipe';

@Component({
  selector: 'general',
  standalone: true,
  imports: [EmojiPipe],
  templateUrl: './general.component.html',
  styleUrl: './general.component.css'
})
export class GeneralComponent {
  constructor(
    private database: DatabaseService
  ){}
  data = this.database.general

  @Input() lang!: number;
  @Output() langChange = new EventEmitter<number>();

  pol() {
    this.lang = 0;
    this.langChange.emit(this.lang)
  }
  eng() {
    this.lang = 1;
    this.langChange.emit(this.lang)
  }
}
