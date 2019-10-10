import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { CurrentComponent } from './current/current.component';
import { CompletedComponent } from './completed/completed.component';
import { UsermessageComponent } from './usermessage/usermessage.component';
import { TrainerlaunchComponent } from './trainerlaunch/trainerlaunch.component';
import { TrainercurrentComponent } from './trainercurrent/trainercurrent.component';
import { TrainercompletedComponent } from './trainercompleted/trainercompleted.component';
import { EditskillsComponent } from './editskills/editskills.component';
import { TrainermessageComponent } from './trainermessage/trainermessage.component';
import { AdminuserComponent } from './adminuser/adminuser.component';
import { AdmintrainerComponent } from './admintrainer/admintrainer.component';
import { TechnologyComponent } from './technology/technology.component';
import { PayComponent } from './pay/pay.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { Profile1Component } from './profile1/profile1.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { TrainerloginComponent } from './trainerlogin/trainerlogin.component';
import { MainComponent } from './main/main.component';
import { UserlaunchComponent } from './userlaunch/userlaunch.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { Profile2Component } from './profile2/profile2.component';
import { Profile3Component } from './profile3/profile3.component';
import { Profile4Component } from './profile4/profile4.component';
import { StartComponent } from './start/start.component';
import { TrainersignupComponent } from './trainersignup/trainersignup.component';
import { TechaddComponent } from './techadd/techadd.component';


const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: StartComponent },
  { path: 'main', component: MainComponent },

  { path: 'current', component: CurrentComponent },
  { path: 'completed', component: CompletedComponent },
  { path: 'usermessage', component: UsermessageComponent },
  { path: 'trainerlaunch', component: TrainerlaunchComponent },
  { path: 'trainercurrent', component: TrainercurrentComponent },
  { path: 'trainercompleted', component: TrainercompletedComponent },
  { path: 'editskills', component: EditskillsComponent },
  { path: 'trainermessage', component: TrainermessageComponent },
  { path: 'adminuser', component: AdminuserComponent },
  { path: 'admintrainer', component: AdmintrainerComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'pay', component: PayComponent },
  {path:'userlogin',component:UserloginComponent},
  {path:'profile1',component:Profile1Component},
  {path:'profile2',component:Profile2Component},
  {path:'profile3',component:Profile3Component},
  {path:'profile4',component:Profile4Component},
  {path:'usersignup',component:UsersignupComponent},
  {path:'trainersignup',component:TrainersignupComponent},
  {path:'trainerlogin',component:TrainerloginComponent},
  {path:'userlaunch',component:UserlaunchComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'techadd',component:TechaddComponent}








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
