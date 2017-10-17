import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  canAddCars = false;
  addCarsStatus = false;
  inputText = '';
  carName = '';
  cars = ['Ford', 'Audi', 'BMW'];
  items = [{id: 3, name: 'item 1'}, {id: 6, name: 'item 2'}, {id: 9, name: 'item 3'}, {id: 9, name: 'item 232323'}];

  constructor() {
    setTimeout(() => {
      this.canAddCars = true;
    }, 4000);
  }

  ngOnInit() {
  }

  addCar() {
    this.addCarsStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
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
