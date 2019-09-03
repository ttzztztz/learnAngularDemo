import { Injectable } from "@angular/core";
import { IShoppingCartItem } from "./i-shopping-cart-item";

@Injectable({
  providedIn: "root"
})
export class ShoppingCartService {
  list: Array<IShoppingCartItem> = [];

  getList() {
    return this.list;
  }

  clearCart() {
    this.list = [];
    return this.list;
  }

  addToCart(product: string) {
    this.list.push({
      name: product,
      count: 1
    });
    return this.list;
  }

  setCount(product: string, newCount: number) {
    this.list = this.list.map(item => {
      if (item.name === product) {
        return { ...item, count: newCount };
      } else {
        return item;
      }
    });

    return this.list;
  }
}
