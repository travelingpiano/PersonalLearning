import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  @Input('title') title;
  isSelected: boolean;

  constructor() {
    this.isSelected = false;
  }

  ngOnInit() {
  }

  onClick(){
    this.isSelected = !this.isSelected;
  }
}
