import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationserviceService } from '../validationservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Trainer } from '../trainer';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';
import { TrainerserviceService } from '../trainerservice.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

 
    mentorForm:FormGroup;
    submitted = false;
    email:string;
    password:string;
    mentorObj:Trainer[];
    admin:any;
  
    userForm:FormGroup;
    usersubmitted=false;
    useremail:string;
    userpassword:string
    userObj:User[];
    useradmin:any;
  
    constructor(private formBuilder: FormBuilder,private router:Router,private userservice:UserserviceService,private trainerservice:TrainerserviceService) { }
  
  
    ngOnInit() {    
      this.mentorForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
  
      this.userForm = this.formBuilder.group({
        useremail:['',[Validators.required,Validators.email]],
        userpassword:['',[Validators.required, Validators.minLength(6)]]
      });
      // this.model.email="";
      // this.model.password="";
      // this.model.errorMessage="";
    }
    get f() { return this.mentorForm.controls; }
    get g() { return this.userForm.controls;}
  
    onSubmit(){
  
      console.log("hi");
      this.submitted=true;
      // this.usersubmitted=true;
      if(this.mentorForm.invalid){
        return;
      }
      else{
        this.trainerservice.getMentorDetails(this.mentorForm.get('email').value).subscribe(data=>{
          this.admin=data;
    
  
          if(this.admin==null){
            alert("Invalid credentials 1");
          }
          else if(this.admin.password==this.mentorForm.get('password').value){
            // alert("valid");
            this.router.navigateByUrl('/trainerlaunch');
          }
          else{
            console.log(this.admin.email);
            alert("Invalid credentials 2");
          }
        })
      }
    }
    onUserSubmit(){
      console.log("hi trainee");
      this.usersubmitted=true;
      if(this.userForm.invalid){
        return;
      }
      else{
        this.userservice.getUserDetails(this.userForm.get('useremail').value).subscribe(data=>{
          this.useradmin=data;
  
          if(this.useradmin==null){
            alert("Invalid credentials 1");
          }
          else if(this.useradmin.userPassword==this.userForm.get('userpassword').value){
            this.router.navigateByUrl('/userlaunch');
          }
          else{
            console.log(this.useradmin.userEmail);
           
            alert("invalid credentials 2");
          }
        })
      }
    }}
  
   