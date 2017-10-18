import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';
// import {Element} from "@angular/compiler";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  carName = '';
  // carYear = 2017;
  @Output() onAddCar = new EventEmitter<{name: String, year: number}>();
  @ViewChild('carYearInput') carYearInput: ElementRef;

  addCarsStatus = false;

  constructor() { }

  ngOnInit() {
  }

  addCar(carNameEl: HTMLInputElement) {
    this.addCarsStatus = true;
    this.onAddCar.emit({name: carNameEl.value,
    year: +this.carYearInput.nativeElement.value}); // + значит число
    carNameEl.value = '';
    this.carYearInput.nativeElement.value = 2017;
  }

}
