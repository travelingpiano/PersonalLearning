import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  likeStatus: boolean;
  likeCount: number;

  constructor() {
    this.likeStatus = false;
    this.likeCount = 0;
  }

  ngOnInit() {
  }

  onClick() {
    this.likeStatus = !this.likeStatus;
    this.likeCount = this.likeCount == 0 ? 1 : 0;
  }

}
