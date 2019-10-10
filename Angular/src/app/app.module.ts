import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { CurrentComponent } from './current/current.component';
import { SkillbarcurrentComponent } from './skillbarcurrent/skillbarcurrent.component';
import { CompletedComponent } from './completed/completed.component';
import { SkillbarcompletedComponent } from './skillbarcompleted/skillbarcompleted.component';
import { MessageheaderComponent } from './messageheader/messageheader.component';
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
import { UsersignupComponent } from './usersignup/usersignup.component';
import { TrainersignupComponent } from './trainersignup/trainersignup.component';
import { TrainerloginComponent } from './trainerlogin/trainerlogin.component';
import { Profile1Component } from './profile1/profile1.component';
import { Profile2Component } from './profile2/profile2.component';
import { Profile3Component } from './profile3/profile3.component';
import { Profile4Component } from './profile4/profile4.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { MainComponent } from './main/main.component';
import { UserlaunchComponent } from './userlaunch/userlaunch.component';
import { TrainerheaderComponent } from './trainerheader/trainerheader.component';
import { StartComponent } from './start/start.component';
import { FormsModule, ReactiveFormsModule, FormControlName } from '@angular/forms';
import { TechaddComponent } from './techadd/techadd.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserheaderComponent,
    CurrentComponent,
    SkillbarcurrentComponent,
    CompletedComponent,
    SkillbarcompletedComponent,
    MessageheaderComponent,
    UsermessageComponent,
    TrainerlaunchComponent,
    TrainercurrentComponent,
    TrainercompletedComponent,
    EditskillsComponent,
    TrainermessageComponent,
    AdminuserComponent,
    AdmintrainerComponent,
    TechnologyComponent,
    PayComponent,
    UserloginComponent,
    UsersignupComponent,
    TrainersignupComponent,
    TrainerloginComponent,
    Profile1Component,
    Profile2Component,
    Profile3Component,
    Profile4Component,
    AdminloginComponent,
    MainComponent,
    UserlaunchComponent,
    TrainerheaderComponent,
    StartComponent,
    TechaddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
