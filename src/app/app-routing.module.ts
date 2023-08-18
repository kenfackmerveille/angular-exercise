import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { SingUpComponent } from './tasks/sing-up/sing-up.component';
import { LogInComponent } from './tasks/log-in/log-in.component';
import { LogOutComponent } from './tasks/log-out/log-out.component';
import { SendComponent } from './tasks/send/send.component';
import { MainComponent } from './main/main.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';

const routes: Routes = [
  {
    path:'',
    component: HomePageComponent,
    children:[
      {
        path: 'header',
        component: HeaderComponent
      }
    ]
  },
  {
    path: 'home-page',
    component: HomePageComponent
  },
  {
    path:'sing-up',
    component: SingUpComponent
  },
  {
    path:'log-in',
    component:LogInComponent
  },
  {
    path:'log-out',
    component:LogOutComponent
  },
  {
    path:'send',
    component:SendComponent,
    children:[
      {
        path:'main',
        component: MainComponent
      }
    ]
  },
  {
    path: 'add-task',
    component: AddTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
