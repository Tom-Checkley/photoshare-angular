import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { UploadComponent } from './components/upload/upload.component';
import { ImageComponent } from './components/image/image.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { DragAndDropDirective } from './directives/drag-and-drop.directive';


@NgModule({
  declarations: [
    SharedComponent,
    UploadComponent,
    ImageComponent,
    GalleryComponent,
    DragAndDropDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
