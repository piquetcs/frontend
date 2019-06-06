import { Component, OnInit } from "@angular/core";
import { Profile } from "../profile";

@Component({
  selector: "app-view-profile",
  templateUrl: "./view-profile.component.html",
  styleUrls: ["./view-profile.component.scss"]
})
export class ViewProfileComponent implements OnInit {
  profile: Profile = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: ""
  };

  constructor() {}

  ngOnInit() {}
}
