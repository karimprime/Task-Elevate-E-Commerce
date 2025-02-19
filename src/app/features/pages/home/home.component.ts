import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from './../../../core/services/ecommerce/products/products.service';
import { IProduct } from '../../../shared/interface/products';
import { Subscription } from 'rxjs';
import { ProductCardComponent } from '../../layout/additions/product-card/product-card.component';
import { SearchPipe } from '../../../shared/pipes/search/search.pipe';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  imports: [ProductCardComponent, SearchPipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  allProducts: IProduct[] = [];
  ProductSub: Subscription = new Subscription();
  private productsService = inject(ProductsService);

  userWord: string = "";
  ngOnInit() {
    this.getAllProductHome();
  }

  getAllProductHome() {
    this.productsService.getAllProducts().subscribe({
      next: (res) => {
        this.allProducts = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  ngOnDestroy() {
    this.ProductSub.unsubscribe();
  }
}

