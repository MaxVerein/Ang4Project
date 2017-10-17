import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
/*carName = 'Ford';
  carYear = 2017;*/

  @Input () carItem: {name: String, year: number};
  // @Input ('carItem') car: {name: String, year: number};
  // private carItem = false;

/*  getName() {
    return this.carName;
  }*/
  constructor() { }

  ngOnInit() {
  }

}
