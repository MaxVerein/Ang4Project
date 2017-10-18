import {Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit, ContentChild} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit, AfterViewInit {
/*carName = 'Ford';
  carYear = 2017;*/
@ContentChild('carHeading') carHeading: ElementRef;  // внешний декоратор

  @Input () carItem: {name: String, year: number};
  // @Input ('carItem') car: {name: String, year: number};
  // private carItem = false;

/*  getName() {
    return this.carName;
  }*/
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.carHeading);
  }

}
