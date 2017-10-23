import { Component, OnInit } from '@angular/core';
import { LikesService } from './likes.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  likeStatus: string;
  likesCount: number;

  constructor(service: LikesService) {
    this.likeStatus = "Unliked";
    this.likesCount = service.getLikes();
  }

  likeChange(event){
    this.likeStatus = (this.likeStatus == "Liked") ? "Unliked" : "Liked";

    this.likesCount += (this.likeStatus == "Liked") ? 1 : -1;
  }

  ngOnInit() {
  }

}
