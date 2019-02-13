import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Team } from "./model/Team";
import { Match } from './model/Match';


const httpOptions = {
  headers: new HttpHeaders({
    "X-Auth-Token": "2e3c901899bb4170a5c129a253be91cb"
  })
};

@Injectable({
  providedIn: "root"
})
export class RequestService {
  BASE_URL = "http://api.football-data.org/v2/competitions/2019/matches";

  constructor(private http: HttpClient) {}

  getMatch(): Observable<Match[]> {
    console.log(this.BASE_URL,httpOptions);

    return this.http.get(this.BASE_URL, httpOptions)
    .pipe(
        map(
          (response: Match[]) => {
            console.log(response['matches']);
            return response['matches'].map(res => (Match.convMatchJson(res)));
          })
    );
  }
}
