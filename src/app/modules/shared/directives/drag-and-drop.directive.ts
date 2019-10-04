import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDropZone]'
})
export class DragAndDropDirective {

  @Output() dropped = new EventEmitter<FileList>();
  @Output() hovered = new EventEmitter<boolean>();

  constructor() { }

  @HostListener('dragover', ['$event'])
  onDragOver($event) {
    $event.preventDefault();
    console.log('dropzone hover');
    this.hovered.emit(true);
  }

  @HostListener('drop', ['$event'])
  onDrop($event) {
    $event.preventDefault();
    console.log('dropped');
    this.dropped.emit($event.dataTransfer.files);
    this.hovered.emit(false);
  }

  @HostListener('dragover', ['$event'])
  onDragLeave($event) {
    $event.preventDefault();
    console.log('drag leave');
    this.hovered.emit(false);
  }

}
