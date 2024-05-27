

import { Component, OnInit } from '@angular/core';
import { LikeService } from '../../services/like.service';
import { Like } from '../../models/like';

@Component({
  selector: 'app-like-list',
  templateUrl: './like-list.component.html',
  styleUrls: ['./like-list.component.css']
})
export class LikeListComponent implements OnInit {
  likes: Like[] = [];

  constructor(private likeService: LikeService) { }

  ngOnInit(): void {
    this.loadLikes();
  }

  loadLikes(): void {
    this.likeService.getLikes().subscribe((data: Like[]) => {
      this.likes = data;
    }, error => {
      console.error('Error fetching likes', error);
    });
  }
}
