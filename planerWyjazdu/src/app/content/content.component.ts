import { Component, OnInit } from '@angular/core';
import {Place} from "../models/place";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public places: Place[] = [];

  constructor() {
  }

  ngOnInit() {

    for (let i = 0; i < 6; i++){

      let place = new Place();
      place.name="Stopy Stanisława";
      place.address="Stanisławowo Wielkie pod Radzymiem 2/5";
      this.places.push(place);

    }
  }

}
