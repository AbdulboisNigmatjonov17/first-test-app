import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(values: string[], searchText: string): string[] {
    if (!searchText) return values;

    return values.filter((item) =>
      item.toLowerCase().includes(searchText.toLowerCase()))
  }
}
