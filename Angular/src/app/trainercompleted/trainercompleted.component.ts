import { Component, OnInit } from '@angular/core';
import { Usercompleted } from '../usercompleted';
import { UsercompletedserviceService } from '../usercompletedservice.service';

@Component({
  selector: 'app-trainercompleted',
  templateUrl: './trainercompleted.component.html',
  styleUrls: ['./trainercompleted.component.css']
})
export class TrainercompletedComponent implements OnInit {

  users:Usercompleted[];

  constructor(private userService:UsercompletedserviceService) { }

  ngOnInit() {

    this.userService.findAll().subscribe(data=>{
      this.users=data;
    });
  }

}
