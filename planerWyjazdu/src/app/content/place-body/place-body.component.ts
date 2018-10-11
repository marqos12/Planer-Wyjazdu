import {Component, Input, OnInit} from '@angular/core';
import {DayHours, Place} from "../../models/place";
import {DomSanitizer, SafeStyle} from "@angular/platform-browser";
import {PlacesServiceService} from "../../service/places-service.service";

@Component({
  selector: 'app-place-body',
  templateUrl: './place-body.component.html',
  styleUrls: ['./place-body.component.css']
})
export class PlaceBodyComponent implements OnInit {

  public place: Place;
  public id: number;
  public openHoours: string;


  private spaceWidth:number;
  private hourWidth:number;

  @Input() set setPlace (place: Place) {
    this.place = place;
  }
  @Input() set setId (id: number) {
    this.id = id;
  }

  constructor(private placeService: PlacesServiceService) {

  }

  ngOnInit() {
    this.spaceWidth = (window.innerWidth-20)*0.58;
    this.hourWidth = this.spaceWidth / this.placeService.getHourRange();

  }


  checkOpenHours(){
    this.openHoours="pn";
    let isTheSame:boolean=false;
    for (let i = 1; i < 7; i++){
      if((this.place.days[i].startHours == this.place.days[i-1].startHours)
        &&(this.place.days[i].startMinutes == this.place.days[i-1].startMinutes)
        &&(this.place.days[i].stopHours == this.place.days[i-1].stopHours)
        &&(this.place.days[i].stopMinutes == this.place.days[i-1].stopMinutes)){
        //jeżeli jest takie samo jak poprzedni dzien
        isTheSame=true;
      }
      else {
        //jeżeli nie jest takie samo jak poprzedni dzień
        if(isTheSame){
          //ale poprzedni dzień był taki sam jak wcześniejszy
          this.openHoours+="-"+this.getDayShortcut(i-1)+" "+this.getTimeFromDay(this.place.days[i-1]);
          isTheSame = false;
        }
        else{
          //ale poprzedni dzień nie był taki sam jak wczesniejszy

        }
      }
    }
  }

  private getDayShortcut(i:number){
    switch (i) {
      case 1:
        return "pn";
      case 2:
        return "wt";
      case 3:
        return "sr";
      case 4:
        return "czw";
      case 5:
        return "pt";
      case 6:
        return "so";
      case 7:
        return "nd";
    }
  }

  private getTimeFromDay(day:DayHours):string{
    return day.startHours.toLocaleString()+":"
      +day.startMinutes.toLocaleString()+"-"
      +day.stopHours.toLocaleString()+":"
      +day.stopMinutes.toLocaleString();
  }

  getRandomColor() {
    return 'rgb('+Math.floor(Math.random() * 256)+','+Math.floor(Math.random() * 256)+','+Math.floor(Math.random() * 256)+');';
  }



}
