import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchTerm) {
      return items;
    }
    searchTerm = searchTerm.toLocaleLowerCase();

    return items.filter((item) => {
      return item.name.toLocaleLowerCase().includes(searchTerm);
    });
  }
}
