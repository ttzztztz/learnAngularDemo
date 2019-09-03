import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import list from "../../assets/list";
import { IShoppingListItem } from "../i-shopping-list-item";

@Component({
  selector: "app-shopping-item",
  templateUrl: "./shopping-item.component.html",
  styleUrls: ["./shopping-item.component.css"]
})
export class ShoppingItemComponent implements OnInit {
  itemId: number = 0;
  item: IShoppingListItem;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.itemId = +param.get("id");
      [this.item] = list.filter((_item, id) => id === this.itemId);
    });
  }
}
