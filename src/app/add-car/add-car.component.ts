import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  carName = '';
  carYear = 2017;
  @Output() onAddCar = new EventEmitter<{name: String, year: number}>();

  addCarsStatus = false;

  constructor() { }

  ngOnInit() {
  }

  addCar() {
    this.addCarsStatus = true;

    this.onAddCar.emit({name: this.carName,
    year: this.carYear});
    this.carName = '';
    this.carYear = 2017;
  }

}
