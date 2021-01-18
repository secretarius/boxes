import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idx-convert',
  templateUrl: './idx-convert.component.html',
  styleUrls: ['./idx-convert.component.scss']
})
export class IdxConvertComponent implements OnInit {

  links = [
    {name: 'Currency convertor', path: '/convert/currency'},
    {name: 'Length convertor', path: '/convert/length'}
  ]

  activeLink = this.links[0];

  constructor() {
    this.activeLink = this.links[0];
   }

  ngOnInit(): void {
  }

}
