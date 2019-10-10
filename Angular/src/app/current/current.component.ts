import { Component, OnInit } from '@angular/core';
import { Usercompleted } from '../usercompleted';
import { UsercompletedserviceService } from '../usercompletedservice.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  users:Usercompleted[];

  constructor(private userService:UsercompletedserviceService) { }

  ngOnInit() {

    this.userService.findAll().subscribe(data=>{
      this.users=data;
    });
  }

}

