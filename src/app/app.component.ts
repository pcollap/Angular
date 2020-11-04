import { Component } from '@angular/core';

//A component is just a directive at heart with a view
@Component({
  selector: 'mw-app',
  //selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular10App Testing Tutorial';
  firstMediaItem = {
    id: 1,
    name: 'Firebug',
    medium: 'Series',
    category: 'Science Fiction',
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: false
  };

  onMediaItemDelete(mediaItem) {

  }
}
