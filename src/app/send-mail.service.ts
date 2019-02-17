import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import * as emailjs from 'emailjs-com';


@Injectable({
  providedIn: 'root'
})
export class SendMailService {
     
    constructor(private http: HttpClient) { }
  
sendEmail(name,email,phone,message){

      var templateParams = {
        name: name,
        notes: 'Test',
        message: message, 
        email:email,
        phone:phone    
    };
      emailjs.send('gmail','template_FTBKBXxG', templateParams,'user_q7h4GrCpKAUSHbERw1v66')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(err) {
       console.log('FAILED...', err);
    });
}

  
}