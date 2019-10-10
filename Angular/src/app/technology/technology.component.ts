import { Component, OnInit } from '@angular/core';
import { Technology } from '../technology';
import { TechnologyserviceService } from '../technologyservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  users: Technology[];
  users1:Observable<Technology[]>;
  constructor(private userService: TechnologyserviceService) {
  }
 
  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users= data;
    });
    this.reloadData();
  }
  reloadData(){
    this.userService.findAll().subscribe(data=>{
      this.users=data;
    });
    this.users1=this.userService.findAll();
  }
  deleteUser(techId: number) {
    this.userService.deleteUser(techId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  
  }