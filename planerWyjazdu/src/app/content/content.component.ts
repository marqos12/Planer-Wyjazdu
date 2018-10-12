import { Component, OnInit } from '@angular/core';
import {Place, DayHours} from "../models/place";
import {PlacesServiceService} from "../service/places-service.service";


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public places: Place[] = [];

  constructor(private placeService:PlacesServiceService) {
  }

  ngOnInit() {

    let nazwy = ["Wyższa szkołą robienia hałasu",
      "Muzeum Gówna",
      "Politechnika Warszawska",
      "Rzeszów",
      "Obwodnica Brzozowa",
      "Dworzec PKP w Brzozowie"];

    let adresy=["ul. Wypizdowska 14/3",
      "ul. Sraczkowa 9",
      "ul. Grójecka 134",
      "al. Raka 2000",
      "ul. Szpitalna",
      "al. Obok Biedronki"];

    let godzinyOtwarcia: number[]=[9,11,7,8,10,7]
    let minutyOtwarcia:number[]=[3,3,0,0,0,3];
    let godzinyZamkniecia=[14,18,14,16,15,15];
    let minutyZamkniecia:number[]=[0,0,3,0,3,3];

    let godzinyOtwarciaS=[11,9,9,8,10,9]
    let minutyOtwarciaS:number[]=[0,0,0,0,0,0];
    let godzinyZamknieciaS=[14,15,14,16,17,18];
    let minutyZamknieciaS:number[]=[0,0,0,0,3,3];


    for (let i = 0; i < 6; i++){

      let place = new Place();

      place.name=nazwy[i];
      place.address=adresy[i];

      for(let j = 0; j < 7; j++) {
        place.days[j].startHours = Math.floor(godzinyOtwarcia[i]+j/3);
        place.days[j].startMinutes = minutyOtwarcia[i];
        place.days[j].stopHours = Math.floor(godzinyZamkniecia[i]+j/3);
        place.days[j].stopMinutes = minutyZamkniecia[i];
        place.days[j].color='#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
      }

      //this.places.push(place);
this.placeService.setPlace(place);
    }
    this.places = this.placeService.getPlaces();
  }

}
