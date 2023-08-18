import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LogInComponent } from './tasks/log-in/log-in.component';
import { LogOutComponent } from './tasks/log-out/log-out.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SingUpComponent } from './tasks/sing-up/sing-up.component';
import { SendComponent } from './tasks/send/send.component';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat';
import { provideAuth , getAuth } from '@angular/fire/auth';
import{provideFirestore, getFirestore} from '@angular/fire/firestore';
import { environment } from 'src/environment/environment';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    LogInComponent,
    LogOutComponent,
    HomePageComponent,
    SingUpComponent,
    SendComponent,
    AddTaskComponent,
    TasksListComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore (() => getFirestore ())
  ],
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
