import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.scss']
})
export class MediaItemComponent {
  //property bindings below
  name = "Prashanth Collapancheri"; //called in media-item.component.html with {}
  wasWatched() {
    return false;
  }

  //Input Decorator
  @Input() mediaItem;

  //Output Decorator
  @Output() delete = new EventEmitter();

  onDelete() {
    console.log("Delete this");
    this.delete.emit(this.mediaItem);
  }
}
