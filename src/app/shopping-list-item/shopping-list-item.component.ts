import { Component, OnInit, Input } from "@angular/core";
import { IShoppingListItem } from "../i-shopping-list-item";
import { Router } from "@angular/router";
import { ShoppingCartService } from "../shopping-cart.service";

@Component({
  selector: "app-shopping-list-item",
  templateUrl: "./shopping-list-item.component.html",
  styleUrls: ["./shopping-list-item.component.css"]
})
export class ShoppingListItemComponent implements OnInit {
  @Input() item: IShoppingListItem;
  @Input() id: number;

  constructor(private router: Router, private cartService: ShoppingCartService) {}

  ngOnInit() {}

  onNameClick = (id: string) => {
    this.router.navigate(["/item", id]);
  };
  onBuy = (name: string) => {
    this.cartService.addToCart(name);
  };
}
