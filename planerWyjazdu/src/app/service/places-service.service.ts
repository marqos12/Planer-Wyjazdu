import { Injectable } from '@angular/core';
import {Place} from "../models/place";

@Injectable({
  providedIn: 'root'
})
export class PlacesServiceService {

  private places:Place[]=[];
  private minHour:number=18;
  private maxHour:number=10;

  constructor() { }

  public setPlace(place: Place){
    this.places.push(place);
    this.minMaxHours(place);
  }

  public getPlaces():Place[]{
    return this.places;
  }

  private minMaxHours(place: Place){
    for (let i = 0; i < 7; i++){
      if(!place.days[i].disable){
        if (place.days[i].startHours < this.minHour) this.minHour = place.days[i].startHours;
        if (place.days[i].stopHours > (this.maxHour - 1)) this.maxHour = place.days[i].stopHours + 1;
      }
    }



  }

  public getMinHour():number{
    return this.minHour;
  }

  public getMaxHour():number{
    return this.minHour;
  }

  public getHourRange():number{
    return this.maxHour-this.minHour;
  }

}
