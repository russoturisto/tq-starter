import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: 'page-header.component.html'
})
export class PageHeaderComponent implements OnInit {

	@Input() title:string;

  constructor() { }

  ngOnInit() {
	  console.log('title: ' + this.title);
  }

}
