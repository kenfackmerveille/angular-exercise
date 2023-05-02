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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
