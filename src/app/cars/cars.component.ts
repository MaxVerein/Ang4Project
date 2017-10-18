import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarsComponent implements OnInit {
  canAddCars = false;
  inputText = '';
  // cars = ['Ford', 'Audi', 'BMW'];
  items = [{id: 3, name: 'item 1'}, {id: 6, name: 'item 2'}, {id: 9, name: 'item 3'}, {id: 9, name: 'item 232323'}];

  cars2: [{name: String, year: number}] = [{
    name: 'Ford',
    year: 2017
  }, {
    name: 'Mazda',
    year: 2017
  }, {
    name: 'Audi',
    year: 2017
  }, {
    name: 'BMW',
    year: 2017
  }];

  updateCarList(car: {name: String, year: number}) {
    this.cars2.push(car);
  }
  constructor() {
    setTimeout(() => {
      this.canAddCars = true;
    }, 4000);
  }

  ngOnInit() {
  }

 /* onKeyUp(event: Event) {
    this.inputText = (<HTMLInputElement>event.target).value;
  }*/

/*  onKeyUp(event) {
    if (event.code === 'Enter') {
      this.inputText = event.target.value;
    }
  }

  onKeyUp2(event) {
      this.inputText = event;
  }*/

  setBigText(item: String) {
    console.log(item.length > 6);
    return item.length > 6;
  }

}
