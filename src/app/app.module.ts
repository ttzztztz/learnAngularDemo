import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingListItemComponent } from "./shopping-list-item/shopping-list-item.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { ShoppingItemComponent } from "./shopping-item/shopping-item.component";
import { TestComponent } from "./shopping-list/test/test.component";
import { AddressListComponent } from "./address-list/address-list.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { UserLoginComponent } from "./user-login/user-login.component";

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListItemComponent,
    ShoppingCartComponent,
    ShoppingItemComponent,
    TestComponent,
    AddressListComponent,
    UserLoginComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
