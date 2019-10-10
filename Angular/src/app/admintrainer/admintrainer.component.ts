import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchserviceService } from '../searchservice.service';
import { Search } from '../search';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admintrainer',
  templateUrl: './admintrainer.component.html',
  styleUrls: ['./admintrainer.component.css']
})
export class AdmintrainerComponent implements OnInit {
  mentors:Observable<Search[]>;
  constructor(private httpService:HttpClient, private searchService:SearchserviceService) { }
  search1:Search[];
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
    this.mentors=this.searchService.findAll();
  }
  deleteMentor(mentorId: number) {
    this.searchService.deleteMentor(mentorId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

}
