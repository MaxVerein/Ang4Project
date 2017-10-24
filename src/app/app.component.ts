import { Component } from '@angular/core';
import 'rxjs/RX';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  headerText = 'Директива';
  title2 = '';
/*  asyncTitle =
    Observable.of('Async title 3 seconds').delay(3000).subscribe((str) => this.title2 = str);*/

  asyncTitle = Observable.of('Async title 3 seconds').delay(3000);

  items = [1, 2, 3, 4, 5, 6];
  current = 1;

  onClick (item: number) {
    console.log(item);
    this.current = item;
  }



}
