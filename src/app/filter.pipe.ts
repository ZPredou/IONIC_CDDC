import { Pipe, PipeTransform, OnInit } from '@angular/core';

@Pipe({
  name: 'search',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], terms: string): any[] {
    if(!items) return [];
    if(!terms) return items;
    terms = terms.toLowerCase();
    return  items.filter(item =>
                        Object.keys(item).some(k => item[k] != null &&
                        item[k].toString().toLowerCase()
                        .includes(terms.toLowerCase()))
                        );
  }
}
