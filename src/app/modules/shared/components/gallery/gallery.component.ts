import { Component, OnInit, Input } from '@angular/core';
import { Image } from 'src/app/classes/image';
import { Post } from 'src/app/classes/post';
import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() images: Image[];

  constructor(private postService: PostsService) { }

  ngOnInit() {
  }

}
