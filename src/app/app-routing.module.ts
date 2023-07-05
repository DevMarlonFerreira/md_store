import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("../app/features/home/home.component").then((m) => m.HomeComponent),
  },
  {
    path: "products",
    loadComponent: () =>
      import("../app/features/products/products.component").then((m) => m.ProductsComponent),
  },
  {
    path: "product/:slug",
    loadComponent: () =>
      import("../app/features/product/product.component").then((m) => m.ProductComponent),
  },
  {
    path: "cart",
    loadComponent: () =>
      import("../app/features/cart/cart.component").then((m) => m.CartComponent),
  },
  {
    path: "checkout",
    loadComponent: () =>
      import("../app/features/checkout/checkout.component").then((m) => m.CheckoutComponent),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
