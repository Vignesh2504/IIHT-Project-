import { Component, OnInit } from '@angular/core';
import { UsercompletedserviceService } from '../usercompletedservice.service';
import { Usercompleted } from '../usercompleted';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  users:Usercompleted[];

  constructor(private userService:UsercompletedserviceService) { }

  ngOnInit() {

    this.userService.findAll().subscribe(data=>{
      this.users=data;
    });
  }

}
