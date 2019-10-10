import { Component, OnInit } from '@angular/core';
import  * as $ from 'jQuery';

@Component({
  selector: 'app-skillbarcurrent',
  templateUrl: './skillbarcurrent.component.html',
  styleUrls: ['./skillbarcurrent.component.css']
})
export class SkillbarcurrentComponent implements OnInit {

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
