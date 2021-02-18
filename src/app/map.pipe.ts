import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'map', pure: false})
export class MapPipe implements PipeTransform {

  transform(arr: any[]): string[] {
    return arr.map( item => item.title.toUpperCase());
  }

}
