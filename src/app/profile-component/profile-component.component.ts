import { Component, OnInit } from "@angular/core";
import { Profile } from "../profile";
import { ProfileService } from "../services/profile.service";

@Component({
  selector: "app-profile-component",
  templateUrl: "./profile-component.component.html",
  styleUrls: ["./profile-component.component.scss"]
})
export class ProfileComponentComponent implements OnInit {
  profiles: Profile[];
  profile: Profile = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  id: number = 0;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {}

  submitProfile(): void {
    this.profileService
      .addUser(this.profile)
      .subscribe(profile => this.profile);
    console.log("User added");
  }
}
