import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { CardComponent } from './card/card.component';
import { CardTextDetailsComponent } from './card-text-details/card-text-details.component';
import { FooterComponent } from './footer/footer.component';
import { SendFormComponent } from './send-form/send-form.component';
import { HttpModule } from '@angular/http';
import { SendEmailComponent } from './send-email/send-email.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';

const config = {
    apiKey: "AIzaSyA-u0g5-1pYQrDQx3K5NScIS5D2hZxKOgE",
    authDomain: "send-mail-c0122.firebaseapp.com",
    databaseURL: "https://send-mail-c0122.firebaseio.com",
    projectId: "send-mail-c0122",
    storageBucket: "send-mail-c0122.appspot.com",
    messagingSenderId: "659584154038"

};

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    CardComponent,
    CardTextDetailsComponent,
    FooterComponent,
    SendFormComponent,
    SendEmailComponent,
    NavbarComponent
  ],
  imports: [  
    HttpClientModule,
    HttpModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(config)
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
