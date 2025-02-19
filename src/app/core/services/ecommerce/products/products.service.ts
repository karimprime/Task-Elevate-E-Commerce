import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../../../shared/interface/products';
import { Env } from '../../../Environment/Environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private httpClient = inject(HttpClient);

  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${Env.baseApiUrl}/products`);
  }

  getSpecProducts(spId: string | null): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${Env.baseApiUrl}/products/${spId}`);
  }
}
