import { Component, inject, OnInit, signal, WritableSignal, OnDestroy } from '@angular/core';
import { ProductsService } from './../../../core/services/ecommerce/products/products.service';
import { IProduct } from '../../../shared/interface/products';
import { ProductCardComponent } from '../../layout/additions/product-card/product-card.component';
import { SearchPipe } from '../../../shared/pipes/search/search.pipe';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [ProductCardComponent, SearchPipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  allProducts: WritableSignal<IProduct[]> = signal([]);
  private productSub: Subscription = new Subscription();
  private productsService = inject(ProductsService);

  userWord: WritableSignal<string> = signal("");

  ngOnInit() {
    this.getAllProductHome();
  }

  getAllProductHome() {
    this.productSub = this.productsService.getAllProducts().subscribe({
      next: (res) => {
        this.allProducts.set(res);
      }
    });
  }
  ngOnDestroy() {
    this.productSub.unsubscribe();
  }
}
