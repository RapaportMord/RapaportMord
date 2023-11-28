import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogicService {

numberOfTimes: {times: number};
name: {sender: string};

  constructor() {
    this.numberOfTimes = {times : 0};
    this.name = {sender: ''};
   }

   setNumberOfTimes(num: number){
    this.numberOfTimes = {times : num};
   }

   getNumberOfTimes(){
    return this.numberOfTimes;
   }

   setSender(sender: string){
    this.name = { sender: sender};
   }

   getSender(){
    return this.name;
   }
}
