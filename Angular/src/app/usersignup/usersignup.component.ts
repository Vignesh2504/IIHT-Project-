import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormGroupName,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';
import { Actor } from '../actor';


@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
// export class UsersignupComponent implements OnInit {

  
//   usersignup:FormGroup;
//   submitted=false;
//   constructor(private router:Router,private formBuilder:FormBuilder,private userservice:UserserviceService) { }
//   user:User=new User();

//   ngOnInit() {
//   }
//   Onsubmit(){
//     this.submitted=true
//     this.user.userName=this.usersignup.get('username').value;
//     this.user.userEmail=this.usersignup.get('email').value;
//     this.user.userPassword=this.usersignup.get('password').value;
//     this.userservice.createUser(this.user).subscribe(data=>console.log(data),error=>console.log(error));
//   }

// }

export class  UsersignupComponent implements OnInit {

  signinForm: FormGroup;
  submitted = false;
  constructor(private router: Router, private formBulider: FormBuilder,private Userservice:UserserviceService) { }
  user:User = new User();
  actor:Actor =new Actor();
  ngOnInit() {
    this.signinForm = this.formBulider.group(
      {
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
       
      }

    );
  }
  get f() { return this.signinForm.controls; }


  onSubmit() {
      this.submitted=true
      this.user.userName=this.signinForm.get('username').value;
      this.user.userEmail=this.signinForm.get('email').value;
      this.user.userPassword=this.signinForm.get('password').value;
      // this.user.age=this.signinForm.get('age').value;
      // this.user.linkdin=this.signinForm.get('linkdin').value;
      // this.user.email=this.signinForm.get('email').value;
      // this.user.password=this.signinForm.get('password').value;
      this.actor.actorEmail = this.signinForm.get('email').value;
      this.actor.actorPassword = this.signinForm.get('password').value;
      this.actor.actorType = 'user';
      this.actor.actorStatus = true;
      this.user.actor = this.actor;
      this.Userservice.createUser(this.user).subscribe(data => console.log(data),error=>console.log(error));
      
      
      // stop here if form is invalid
    if (this.signinForm.invalid) {
      return;
    }
    else{
      this.router.navigateByUrl('/userlaunch');
    }

  }
}
