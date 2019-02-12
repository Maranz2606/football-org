import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Team } from "./model/Team";

const httpOptions = {
  headers: new HttpHeaders({
    "X-Auth-Token": "2e3c901899bb4170a5c129a253be91cb"
  })
};

@Injectable({
  providedIn: "root"
})
export class RequestService {
  BASE_URL = "http://api.football-data.org/v2/competitions";

  constructor(private http: HttpClient) {}

  getComp(): Observable<Team[]> {
    console.log(this.BASE_URL,httpOptions);

    return this.http.get(this.BASE_URL, httpOptions)
    .pipe(
        map(
          (response: any[]) => {
            console.log(response['competitions']);
            return response['competitions'].map(res => (Team.convTeamJson(res)));
          })
    );
  }
}
