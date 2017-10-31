import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {

  starLink: string;

  constructor() {
    this.starLink = "glyphicon glyphicon-star-empty";
  }

  ngOnInit() {

  }

  flipStar(){
    this.starLink = this.starLink == "glyphicon glyphicon-star-empty" ? "glyphicon glyphicon-star" : "glyphicon glyphicon-star-empty";
  }

}
