import { Component, OnInit } from '@angular/core';
import {Place, DayHours} from "../models/place";


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
    let minutyOtwarcia:number[]=[30,30,0,0,0,30];
    let godzinyZamkniecia=[14,18,14,16,15,15];
    let minutyZamkniecia:number[]=[0,0,30,0,30,30];

    let godzinyOtwarciaS=[11,9,9,8,10,9]
    let minutyOtwarciaS:number[]=[0,0,0,0,0,0];
    let godzinyZamknieciaS=[14,15,14,16,17,18];
    let minutyZamknieciaS:number[]=[0,0,0,0,30,30];


    for (let i = 0; i < 6; i++){

      let place = new Place();

      place.name=nazwy[i];
      place.address=adresy[i];

      place.monday.startHours=godzinyOtwarcia[i];
      place.monday.startMinutes=minutyOtwarcia[i];
      place.monday.stopHours=godzinyZamkniecia[i];
      place.monday.stopMinutes=minutyZamkniecia[i];

      place.tuesday.startHours=godzinyOtwarcia[i];
      place.tuesday.startMinutes=minutyOtwarcia[i];
      place.tuesday.stopHours=godzinyZamkniecia[i];
      place.tuesday.stopMinutes=minutyZamkniecia[i];

      place.wednesday.startHours=godzinyOtwarcia[i];
      place.wednesday.startMinutes=minutyOtwarcia[i];
      place.wednesday.stopHours=godzinyZamkniecia[i];
      place.wednesday.stopMinutes=minutyZamkniecia[i];

      place.thursday.startHours=godzinyOtwarcia[i];
      place.thursday.startMinutes=minutyOtwarcia[i];
      place.thursday.stopHours=godzinyZamkniecia[i];
      place.thursday.stopMinutes=minutyZamkniecia[i];

      place.friday.startHours=godzinyOtwarcia[i];
      place.friday.startMinutes=minutyOtwarcia[i];
      place.friday.stopHours=godzinyZamkniecia[i];
      place.friday.stopMinutes=minutyZamkniecia[i];

      place.saturday.startHours=godzinyOtwarciaS[i];
      place.saturday.startMinutes=minutyOtwarciaS[i];
      place.saturday.stopHours=godzinyZamknieciaS[i];
      place.saturday.stopMinutes=minutyZamknieciaS[i];

      place.sunday.startHours=godzinyOtwarcia[i];
      place.sunday.startMinutes=minutyOtwarcia[i];
      place.sunday.stopHours=godzinyZamkniecia[i];
      place.sunday.stopMinutes=minutyZamkniecia[i];

      this.places.push(place);

    }
  }

}
