import { Component, OnInit } from '@angular/core';
import { SendMailService } from '../send-mail.service';

@Component({
  selector: 'app-send-form',
  templateUrl: './send-form.component.html',
  styleUrls: ['./send-form.component.css']
})
export class SendFormComponent implements OnInit {

  constructor(private sendEmailService: SendMailService) { }

  ngOnInit() {
  }
  onSend(name, email,phone, message){
    this.sendEmailService.sendEmail(name, email,phone, message);
  }
}
