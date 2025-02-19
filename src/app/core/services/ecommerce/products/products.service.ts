import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { IProduct } from '../../../../shared/interface/products';
import { Env } from '../../../Environment/Environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private httpClient = inject(HttpClient);
  private $products: Observable<IProduct[]> | null = null;


  getAllProducts(): Observable<IProduct[]> {
    if (!this.$products) {
      this.$products = this.httpClient.get<IProduct[]>(`${Env.baseApiUrl}/products`).pipe(
        shareReplay(1));
    }
    return this.$products;
  }

  getSpecProducts(spId: string | null): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${Env.baseApiUrl}/products/${spId}`);
  }
}
