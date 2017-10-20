import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  headerText = 'Директива';

  items = [1, 2, 3, 4, 5, 6];
  current = 1;

  onClick (item: number) {
    console.log(item);
    this.current = item;
  }

}
