import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'carFilter',
  // pure: false // Для измененого массива
})
export class CarFilterPipe implements PipeTransform {

  transform(carList, searchStr: string, fieldName: string): any {
    if (carList.length === 0 || searchStr === '') {
      return carList;
    }

    return carList.filter((car) => car.name === searchStr);
  }

}
