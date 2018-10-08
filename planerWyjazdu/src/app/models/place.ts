/**
 * Created by Marq on 08.10.2018.
 */
export class Place {
  name: string;
  address: string;

  monday:DayHours;
  tuesday: DayHours;
  wednesday: DayHours;
  thursday: DayHours;
  friday: DayHours;
  saturday: DayHours;
  sunday: DayHours;
}

class DayHours{
  disable: boolean = false;
  startHours: number;
  startMinutes: number;
  stopHours: number;
  stopMinutes:number;
}
