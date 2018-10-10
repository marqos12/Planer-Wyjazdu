/**
 * Created by Marq on 08.10.2018.
 */
export class Place {
  name: string;
  address: string;

  monday:DayHours=new DayHours;
  tuesday: DayHours=new DayHours;
  wednesday: DayHours=new DayHours;
  thursday: DayHours=new DayHours;
  friday: DayHours=new DayHours;
  saturday: DayHours=new DayHours;
  sunday: DayHours=new DayHours;
}

export class DayHours{
  disable: boolean = false;
  startHours: number;
  startMinutes: number;
  stopHours: number;
  stopMinutes:number;
}
