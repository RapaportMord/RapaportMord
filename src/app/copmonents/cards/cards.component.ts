import { Component } from '@angular/core';
import { LogicService } from 'src/app/logic.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  num : {times: number};
  itareble: number;
  name: {sender: string};

  constructor(private logicService: LogicService){
    this.num = logicService.getNumberOfTimes();
    this.itareble = this.num.times;
    this.name = logicService.getSender();
  }

  numSequence(){
return Array(this.itareble);
  }

}
