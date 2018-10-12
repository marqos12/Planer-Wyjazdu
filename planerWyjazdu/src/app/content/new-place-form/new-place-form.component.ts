import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-place-form',
  templateUrl: './new-place-form.component.html',
  styleUrls: ['./new-place-form.component.css']
})
export class NewPlaceFormComponent implements OnInit {
  public mask = [/\d/,/\d/, ':', /\d/, /\d/,' ','-',' ', /\d/,/\d/, ':', /\d/, /\d/]
  constructor() { }

  ngOnInit() {
  }

}
