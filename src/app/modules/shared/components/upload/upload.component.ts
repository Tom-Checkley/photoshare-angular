import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsService } from 'src/app/services/posts/posts.service';
import { Post } from 'src/app/classes/post';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  description: string;
  error: any;
  file: File;
  isHovering: boolean;
  percentage: number;
  imagePreview: any;
  formSubmitted: boolean;

  constructor(private postService: PostsService) { }

  ngOnInit() {
  }

  getFile(event: FileList): void {
    this.file = event.item(0);
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = e => {
      this.imagePreview = reader.result;
    };
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  savePost(form) {
    if (this.file || this.description) {
      const newPost: Post = {
        description: this.description,
        date: new Date()
      };

      this.postService.newPost(newPost, this.file);
      this.postService.percentageUpload.subscribe(pct => {
        this.percentage = pct;
      });

      this.resetForm(form);
      this.formSubmitted = true;
    }
  }

  resetForm(form) {
    form.reset();
    this.file = undefined;
    this.imagePreview = undefined;
    this.percentage = undefined;
    this.formSubmitted = false;
  }

}
