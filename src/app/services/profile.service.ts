import { Injectable } from "@angular/core";
import { PROFILES } from "../mock_profile";
import { Profile } from "../profile";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  profiles: Profile[] = PROFILES;
  testProfile: Profile;

  private apiUrl = "http://localhost:3332/users";

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.apiUrl);
  }
}
