import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../core/services/ecommerce/products/products.service';
import { IProduct } from '../../../shared/interface/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private productsService = inject(ProductsService);

  productid: string | null = null;
  pSpec: IProduct | null = null;
  loading = true;
  errorMessage = '';

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.productid = params.get('id');
      if (this.productid) {
        this.getProductDetails(this.productid);
      }
    });
  }

  getProductDetails(id: string) {
    this.productsService.getSpecProducts(id).subscribe({
      next: (res) => {
        this.pSpec = res;
        this.loading = false;
      }
    });
  }
}
