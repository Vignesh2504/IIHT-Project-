import { Component, OnInit } from '@angular/core';
import { TrainerserviceService } from '../trainerservice.service';
import { Trainer } from '../trainer';
import { Actor } from '../actor';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainersignup',
  templateUrl: './trainersignup.component.html',
  styleUrls: ['./trainersignup.component.css']
})
export class TrainersignupComponent implements OnInit {


    signinForm: FormGroup;
    submitted = false;
    constructor(private router: Router, private formBulider: FormBuilder,private Trainerservice:TrainerserviceService) { }
    trainer:Trainer = new Trainer();
    actor:Actor =new Actor();
    ngOnInit() {
      this.signinForm = this.formBulider.group(
        {
          mentorname: ['', Validators.required],
          technologyname: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(8)]],
          phone:['',[Validators.required,Validators.minLength(10)]],
          linkdin:[''],
          exp:['',[Validators.required]],
          trainings:['',[Validators.required]]
          
        }
  
      );
    }
    get f() { return this.signinForm.controls; }
  
  
    onSubmit() {
        this.submitted=true
        this.trainer.mentorName=this.signinForm.get('mentorname').value;
        this.trainer.technology=this.signinForm.get('technologyname').value;

        this.trainer.mentorLinkdinUrl=this.signinForm.get('linkdin').value;
        this.trainer.mentorEmail=this.signinForm.get('email').value;
        this.trainer.password=this.signinForm.get('password').value;
        this.trainer.mentorPhone=this.signinForm.get('phone').value;
        this.trainer.mentorYearsExp=this.signinForm.get('exp').value;
        this.trainer.trainings=this.signinForm.get('trainings').value;




        this.actor.actorEmail = this.signinForm.get('email').value;
        this.actor.actorPassword = this.signinForm.get('password').value;
        this.actor.actorType = 'user';
        this.actor.actorStatus = true;
        this.trainer.actor = this.actor;
        this.Trainerservice.createTrainer(this.trainer).subscribe(data => console.log(data),error=>console.log(error));
        
        
        // stop here if form is invalid
      if (this.signinForm.invalid) {
        return;
      }
      else{
        this.router.navigateByUrl('/trainerlaunch');
      }
  
    }
  }
  
