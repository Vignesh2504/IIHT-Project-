import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlockserviceService } from '../blockservice.service';
import { Block } from '../block';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-adminuser',
  templateUrl: './adminuser.component.html',
  styleUrls: ['./adminuser.component.css']
})
export class AdminuserComponent implements OnInit {

  users:Observable<Block[]>;
  constructor(private httpService:HttpClient, private searchService:BlockserviceService) { }
  search1:Block[];
  ngOnInit() {
    
    this.searchService.findAll().subscribe(data=>{
      this.search1=data;
    });
    this.reloadData();

   
}
reloadData(){
  this.searchService.findAll().subscribe(data=>{
    this.search1=data;
  });
  this.users=this.searchService.findAll();
}
deleteUser(userId: number) {
  this.searchService.deleteUser(userId)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
}

}
