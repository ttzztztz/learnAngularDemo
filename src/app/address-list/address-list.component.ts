import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-address-list",
  templateUrl: "./address-list.component.html",
  styleUrls: ["./address-list.component.css"]
})
export class AddressListComponent implements OnInit {
  name = new FormControl("");

  profileForm = new FormGroup({
    mobile: new FormControl("", [Validators.required]),
    address: new FormControl(""),
    fullName: new FormGroup({
      firstName: new FormControl(""),
      lastName: new FormControl("")
    })
  });

  qq = "";
  constructor() {}

  buttonClick() {
    // console.log(this.profileForm.value);
    // console.log(this.profileForm.status);
    // this.profileForm.patchValue({
    //   mobile: "123456",
    //   fullName: {
    //     firstName: "1111111"
    //   }
    // });
  }

  ngOnInit() {}
}
