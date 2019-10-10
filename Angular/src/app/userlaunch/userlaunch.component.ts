import { Component, OnInit } from '@angular/core';
import { SearchserviceService } from '../searchservice.service';
import {HttpClient} from '@angular/common/http';import { Search } from '../search';

@Component({
  selector: 'app-userlaunch',
  templateUrl: './userlaunch.component.html',
  styleUrls: ['./userlaunch.component.css']
})
export class UserlaunchComponent implements OnInit {

  constructor(private httpService:HttpClient, private searchService:SearchserviceService) { }
  
  search1:Search[];


  searchCourse() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }


  ngOnInit() {

    this.searchService.findAll().subscribe(data=>{
      this.search1=data;
    });
  }

}
