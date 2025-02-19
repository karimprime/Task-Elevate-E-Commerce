import { Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home/home.component';
import { NotFoundComponent } from './features/pages/not-found/not-found.component';
import { ProductDetailsComponent } from './features/pages/product-details/product-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'product-details/:id', component: ProductDetailsComponent, title: 'Product Details' },
  { path: '**', component: NotFoundComponent },
];
