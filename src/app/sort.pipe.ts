import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from './hero'

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Hero[], args: keyof Hero): Hero[] {
    if (value) {
      return value.sort((a: Hero, b: Hero) => {
        if (a[args] < b[args]) {
          return -1;
        } else if (b[args] < a[args]) {
          return 1;
        }
        return 0;
      });
    }
    return [];
  }
}
