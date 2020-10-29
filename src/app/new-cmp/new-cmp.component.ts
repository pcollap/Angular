import { Component, OnInit } from '@angular/core';

// this is a declarator which starts with @ sign. The component word marked in bold needs to be the same.
@Component({
  selector: 'app-new-cmp',
  // reference to the html file created in the new component.
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.scss'],
})
export class NewCmpComponent implements OnInit {
   newcomponent = "Entered in new component created";

  constructor() { }

  ngOnInit(): void {
  }

}
