import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("../app/features/home/home.component").then((m) => m.HomeComponent),
  },
  {
    path: "product/:slug'",
    loadComponent: () =>
      import("../app/features/product/product.component").then((m) => m.ProductComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
