import { Component, OnInit } from '@angular/core';
import { LikesService } from './likes.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  likeStatus;
  likesCount;

  constructor(service: LikesService) {
    this.likeStatus = "Unliked";
    this.likesCount = service.getLikes();
  }

  likeChange(event){
    if(this.likeStatus == "Unliked"){
      this.likeStatus = "Liked";
      this.likesCount += 1;
    }else{
      this.likeStatus = "Unliked";
      this.likesCount -= 1;
    }
  }

  ngOnInit() {
  }

}
