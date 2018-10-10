import {Component, Input, OnInit} from '@angular/core';
import {Place} from "../../models/place";
import {DomSanitizer, SafeStyle} from "@angular/platform-browser";

@Component({
  selector: 'app-place-body',
  templateUrl: './place-body.component.html',
  styleUrls: ['./place-body.component.css']
})
export class PlaceBodyComponent implements OnInit {

  public place: Place;
  public id: number;

  private spaceWidth:number;


  @Input() set setPlace (place: Place) {
    this.place = place;
  }
  @Input() set setId (id: number) {
    this.id = id;
  }

  constructor() {

  }

  ngOnInit() {
    this.spaceWidth = (window.innerWidth-20)*0.58;
    console.log(this.spaceWidth);
  }




  getRandomColor() {
    return 'rgb('+Math.floor(Math.random() * 256)+','+Math.floor(Math.random() * 256)+','+Math.floor(Math.random() * 256)+');';
  }



}
