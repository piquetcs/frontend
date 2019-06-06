import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProfileComponentComponent } from "./profile-component/profile-component.component";
import { ViewProfileComponent } from "./view-profile/view-profile.component";

@NgModule({
  declarations: [AppComponent, ProfileComponentComponent, ViewProfileComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
