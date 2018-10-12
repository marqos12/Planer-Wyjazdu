import {Component, Input, OnInit} from '@angular/core';
import {DayHours, Place} from "../../models/place";
import {PlacesServiceService} from "../../service/places-service.service";
import {DomSanitizer, SafeStyle} from "@angular/platform-browser";

@Component({
  selector: 'app-place-body',
  templateUrl: './place-body.component.html',
  styleUrls: ['./place-body.component.css']
})
export class PlaceBodyComponent implements OnInit {

  public place: Place;
  public id: number;
  public openHours: string;
  public graphicHours:any[]=[];
  public hours:string[]=[];

  private spaceWidth:number;
  private hourWidth:number;

  @Input() set setPlace (place: Place) {
    this.place = place;
  }
  @Input() set setId (id: number) {
    this.id = id;
  }

  constructor(private placeService: PlacesServiceService, private sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    this.spaceWidth = (window.innerWidth-20)*0.58;
    this.hourWidth = this.spaceWidth / this.placeService.getHourRange();
    this.checkOpenHours();
    this.setGraphicHours();

    this.mixColours("#A24C56","#123456");
  }


  checkOpenHours(){
    this.openHours="pn";
    let isTheSame:boolean=false;
    for (let i = 1; i < 7; i++){
      if(!this.place.days[i-1].disable && (this.place.days[i].startHours == this.place.days[i-1].startHours)
        &&(this.place.days[i].startMinutes == this.place.days[i-1].startMinutes)
        &&(this.place.days[i].stopHours == this.place.days[i-1].stopHours)
        &&(this.place.days[i].stopMinutes == this.place.days[i-1].stopMinutes)){
        //jeżeli jest takie samo jak poprzedni dzien
        isTheSame=true;
      }
      else if(!this.place.days[i].disable ){
        //jeżeli nie jest takie samo jak poprzedni dzień
        if(isTheSame){
          //ale poprzedni dzień był taki sam jak wcześniejszy
          this.openHours+="-"+this.getDayShortcut(i-1)+" "
            +this.getTimeFromDay(this.place.days[i-1])+", "
            +this.getDayShortcut(i);
          isTheSame = false;
        }
        else{
          //ale poprzedni dzień nie był taki sam jak wczesniejszy
          this.openHours+=" "+this.getTimeFromDay(this.place.days[i-1])+", "
            +this.getDayShortcut(i);
        }
      }
      else {
        //nieczynne
        this.openHours+=" zamknięte, "
          +this.getDayShortcut(i);
      }
    }
    if(!this.place.days[6].disable ){
      if(isTheSame ){
        //ale poprzedni dzień był taki sam jak wcześniejszy
        this.openHours+="-nd "
          +this.getTimeFromDay(this.place.days[6]);
      }
      else{
        //ale poprzedni dzień nie był taki sam jak wczesniejszy
        this.openHours+=" "+this.getTimeFromDay(this.place.days[6]);
      }
    }else {
      this.openHours+=" zamknięte";
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
      +day.startMinutes.toLocaleString()+"0-"
      +day.stopHours.toLocaleString()+":"
      +day.stopMinutes.toLocaleString()+"0";
  }

  private setGraphicHours(){
    this.graphicHours = [];
    let minHour = this.placeService.getMinHour();
    let hour = minHour;
    let minute = 0;

    let isActive = false;

    for (let i = 0; i < this.placeService.getHourRange()*2; i++){
      let width = Math.floor(this.hourWidth/2-2)+'px';
      let height = '100%';
      let dodano = false;
      let backgroundColor;
      for(let j = 0; j < 7; j++){
        if(!this.place.days[j].disable){
          if((this.place.days[j].startHours == hour)&&(this.place.days[j].startMinutes <= minute)){
            //jest już czynne
            if (!dodano){
              backgroundColor=this.place.days[j].color;
              dodano = true;
            }
            else {
              backgroundColor = this.mixColours(backgroundColor,this.place.days[j].color);
            }

          }
          else if ((this.place.days[j].startHours < hour)&&(hour < this.place.days[j].stopHours)){
            //ciągle czynne
            if (!dodano){
              backgroundColor=this.place.days[j].color;
              dodano = true;
            }
            else {
              backgroundColor = this.mixColours(backgroundColor,this.place.days[j].color);
            }
          }
          else if((this.place.days[j].stopHours == hour )&&(this.place.days[j].stopMinutes == minute +3)){
            //zaraz sie konczy
            if (!dodano){
              backgroundColor=this.place.days[j].color;
              dodano = true;
            }
            else {
              backgroundColor = this.mixColours(backgroundColor,this.place.days[j].color);
            }
          }
        }
      }
      let napis=""
      if (!dodano){
        backgroundColor = '#fff';
        if(isActive){
          napis = hour+':'+minute+"0"
          isActive = false;
        }
      }
      else {
        napis = hour+':'+minute+"0";
        isActive = true;
      }

      let style = {
        'height':height,
        'width':width,
        'background-color':backgroundColor
      }
      this.graphicHours.push(style);
      this.hours.push(napis);

      if(minute == 3){
        hour++;
        minute = 0;
      }
      else {
        minute = 3;
      }
    }
  }

  private mixColours(color1:string, color2:string):string{
    let rgb1 = Math.floor(Number("0x"+color1.substr(1,6))/2);
    let rgb2 = Math.floor(Number("0x"+color2.substr(1,6))/4);
    let rgb3 = "#"+((0x1000000+rgb1+rgb2)).toString(16).substr(1,7);
    return rgb3;
  }

}
