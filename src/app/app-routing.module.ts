import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { AppComponent } from "./app.component";
import { ShoppingItemComponent } from "./shopping-item/shopping-item.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const routes: Routes = [
  {
    path: "",
    component: AppComponent
  },
  {
    path: "cart",
    component: ShoppingCartComponent
  },
  {
    path: "item/:id",
    component: ShoppingItemComponent
  },
  {
    path: "list",
    component: ShoppingListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
