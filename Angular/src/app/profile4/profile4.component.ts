import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile4',
  templateUrl: './profile4.component.html',
  styleUrls: ['./profile4.component.css']
})
export class Profile4Component implements OnInit {

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
