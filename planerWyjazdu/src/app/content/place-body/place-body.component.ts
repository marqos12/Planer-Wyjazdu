import {Component, Input, OnInit} from '@angular/core';
import {Place} from "../../models/place";

@Component({
  selector: 'app-place-body',
  templateUrl: './place-body.component.html',
  styleUrls: ['./place-body.component.css']
})
export class PlaceBodyComponent implements OnInit {

  public place: Place;
  public id: number;

  @Input() set setPlace (place: Place) {
    this.place = place;
  }
  @Input() set setId (id: number) {
    this.id = id;
  }


  constructor() {

  }

  ngOnInit() {
  }

}
