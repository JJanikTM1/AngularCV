import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendMessageService {
  constructor() { }

  messages: object[] = []

  sendMessage(mail: string | null, message: string| null){
    this.messages.push({'sender': mail, 'message': message})
    console.log(this.messages)
  }
}
