import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LogicService } from 'src/app/logic.service';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.css']
})
export class InputPageComponent {

  public num: number;
  public name: string;

  constructor(private logicService: LogicService, private router: Router){
    this.num = 0;
    this.name = '';
  }


Navigate(){
this.logicService.setNumberOfTimes(this.num);
this.logicService.setSender(this.name);
this.router.navigate(['/', 'card-page']);

}

}
