import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {ReactiveFormsModule} from '@angular/forms'

//import {AngularFireModule} from 'angularfire2/';


import {AngularFireModule} from '@angular/fire';

//import { AngularFireAuthModule } from 'angularfire2/auth';

import {AngularFireAuthModule} from '@angular/fire/auth';

import {environment} from './../environments/environment';





@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule, AngularFireModule.initializeApp(environment.firebaseConfig), AngularFireAuthModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
