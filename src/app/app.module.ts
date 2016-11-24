import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyCIlh40cQPvfBIbUwxIqOyd-vkmsrDmeF4',
  authDomain: 'angular-firebase-e6510.firebaseapp.com',
  databaseURL: 'https://angular-firebase-e6510.firebaseio.com',
  storageBucket: 'angular-firebase-e6510.appspot.com',
  messagingSenderId: '250459244524'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
