import { Component, OnInit } from "@angular/core";
import list from "../../assets/list";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  list = list;
  constructor() {}

  ngOnInit() {}
}
