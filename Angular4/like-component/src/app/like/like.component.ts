import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input() likeStatus: boolean;
  @Input() likeCount: number;

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    this.likeStatus = !this.likeStatus;
    this.likeCount = this.likeCount == 0 ? 1 : 0;
  }

}
