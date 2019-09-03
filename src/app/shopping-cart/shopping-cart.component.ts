import { Component, OnInit } from "@angular/core";
import { ShoppingCartService } from "../shopping-cart.service";
import { IShoppingCartItem } from "../i-shopping-cart-item";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.css"]
})
export class ShoppingCartComponent implements OnInit {
  list: Array<IShoppingCartItem>;

  constructor(private cartService: ShoppingCartService) {
    this.list = this.cartService.getList();
  }

  ngOnInit() {}
}
