import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillbarcompleted',
  templateUrl: './skillbarcompleted.component.html',
  styleUrls: ['./skillbarcompleted.component.css']
})
export class SkillbarcompletedComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    $(document).ready(function(){
      $('.skillbar').each(function(){
        $(this).find('.skillbar-bar').animate({
          width:$(this).attr('data-percent')
        },6000);
      });
    });
    
    $('.Count').each(function () {
      var $this = $(this);
      $({ Counter: 0 }).animate({ Counter: $this.text() }, {
        duration: 6000,
        easing: 'swing',
        step: function () {
          $this.text(Math.ceil(this.Counter));
        }
      });
    });
  }

}
