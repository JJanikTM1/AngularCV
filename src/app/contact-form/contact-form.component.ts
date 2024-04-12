import { Component, Input } from '@angular/core';
import { SendMessageService } from '../send-message.service';
import { DatabaseService } from '../database.service';
import { FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  @Input() lang!: number;

  constructor(
    private database: DatabaseService,
    private sender: SendMessageService,
    private formBuilder: FormBuilder,
  ){}

  data = this.database.contactForm

  messageForm = this.formBuilder.group({
    mail: '',
    message: ''
  });

  onSubmit(){
    this.sender.sendMessage(this.messageForm.controls['mail'].value, this.messageForm.controls['message'].value)
    window.alert(this.data['alert'][this.lang])
    this.messageForm.reset()
  }
}