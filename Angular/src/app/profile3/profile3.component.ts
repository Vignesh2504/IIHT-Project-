import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile3',
  templateUrl: './profile3.component.html',
  styleUrls: ['./profile3.component.css']
})
export class Profile3Component implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function() {
      var Accordion = function(el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;
  
      // Variables privadas
      var links = this.el.find('.link');
      // Evento
      links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }
  
   
  });
  }

}
