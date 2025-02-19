import { Component, inject, OnInit, signal, WritableSignal, effect } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../core/services/ecommerce/products/products.service';
import { IProduct } from '../../../shared/interface/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private productsService = inject(ProductsService);

  productid: WritableSignal<string | null> = signal(null);
  pSpec: WritableSignal<IProduct | null> = signal(null);
  loading: WritableSignal<boolean> = signal(true);
  errorMessage: WritableSignal<string> = signal('');

  constructor() {
    effect(() => {
      const id = this.productid();
      if (id) {
        this.getProductDetails(id);
      }
    });
  }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.productid.set(id);
      }
    });
  }

  getProductDetails(id: string) {
    this.loading.set(true);
    this.productsService.getSpecProducts(id).subscribe({
      next: (res) => {
        this.pSpec.set(res);
        this.loading.set(false);
      }
    });
  }
}
