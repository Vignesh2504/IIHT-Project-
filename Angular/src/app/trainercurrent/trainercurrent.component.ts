import { Component, OnInit } from '@angular/core';
import { Usercompleted } from '../usercompleted';
import { UsercompletedserviceService } from '../usercompletedservice.service';

@Component({
  selector: 'app-trainercurrent',
  templateUrl: './trainercurrent.component.html',
  styleUrls: ['./trainercurrent.component.css']
})
export class TrainercurrentComponent implements OnInit {

  users:Usercompleted[];

  constructor(private userService:UsercompletedserviceService) { }

  ngOnInit() {

    this.userService.findAll().subscribe(data=>{
      this.users=data;
    });
  }

}