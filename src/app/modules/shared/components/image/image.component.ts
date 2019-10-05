import { Component, OnInit, Input } from '@angular/core';
import { Image } from 'src/app/classes/image';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() image: Image;

  img: Image;

  constructor() { }

  ngOnInit() {
    this.img = { ...this.image };
  }

}
