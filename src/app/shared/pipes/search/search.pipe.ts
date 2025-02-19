import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../../interface/products';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allProducts: IProduct[], searchWord: string): IProduct[] {
    return allProducts.filter(ele => ele.title.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase()));
  }
}
