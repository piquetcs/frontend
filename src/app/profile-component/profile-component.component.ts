import { Component, OnInit } from "@angular/core";
import { Profile } from "../profile";
import { ProfileService } from "../services/profile.service";

@Component({
  selector: "app-profile-component",
  templateUrl: "./profile-component.component.html",
  styleUrls: ["./profile-component.component.scss"]
})
export class ProfileComponentComponent implements OnInit {
  profiles: Profile[] = PROFILES;
  profile: Profile = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  constructor(private profileService: ProfileService) {}

  ngOnInit() {}

  /*submitProfile(): void {
    this.profileService.addProfile(this.profile);
  }*/

  getProfiles(): void {
    this.profileService.getUsers().subscribe(
      users => {
        this.profiles = users;
        console.log("Fetched users", this.profiles);
      },
      err => {
        console.log(err);
      }
    );
  }
}
