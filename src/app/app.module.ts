import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent} from './login/login.component'
import { LoginService} from './login/login.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { ActivitiesListComponent } from './activities-list/activities-list.component';
import { ActivityCardComponent } from './activity-card/activity-card.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavigatorComponent,
    ActivitiesListComponent,
    ActivityCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
