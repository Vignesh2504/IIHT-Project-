import { Component, OnInit } from '@angular/core';
import { Technology } from '../technology';
import { TechnologyserviceService } from '../technologyservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-techadd',
  templateUrl: './techadd.component.html',
  styleUrls: ['./techadd.component.css']
})
export class TechaddComponent implements OnInit {

 

 
  user: Technology;
 
  constructor(private route: ActivatedRoute, private router: Router, private userService: TechnologyserviceService) {
    this.user = new Technology();
  }
  ngOnInit() {
  }

 
  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }
 
  gotoUserList() {
    this.router.navigate(['/technology']);
  }
}


