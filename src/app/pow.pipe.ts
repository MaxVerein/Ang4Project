import {Pipe, PipeTransform} from '@angular/core';

@Pipe ({
  name: 'appPow'
})

export class PowPipe implements PipeTransform {


  transform(value: any, powNumber: number = 1, symb: string) {
   // return value + ' pipe!!! ';
   // {{ number | appPow:3 }}; {{ number | appPow:3:'=' }}
    return symb + Math.pow(value,  powNumber);
  }
}
