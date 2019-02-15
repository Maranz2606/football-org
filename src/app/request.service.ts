import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Team } from "./model/Team";
import { Match } from "./model/Match";

const httpOptions = {
  headers: new HttpHeaders({
    "X-Auth-Token": "2e3c901899bb4170a5c129a253be91cb"
  })
};

@Injectable({
  providedIn: "root"
})
export class RequestService {
  MATCH_URL = "http://api.football-data.org/v2/competitions/2019/matches";

  constructor(private http: HttpClient) {}

  getMatch(): Observable<Match[]> {
    console.log(this.MATCH_URL, httpOptions);
    return this.http.get(this.MATCH_URL, httpOptions).pipe(
      map((response: Match[]) => {
        console.log(response["matches"]);
        return response["matches"].map(matchJson =>
          Match.convMatchJson(matchJson)
        );
      })
    );
  }

  getMatchByID(id: number): Observable<Match> {
    const url = "http://api.football-data.org/v2/matches" + "/" + id;
    console.log(url);
    return this.http.get(url, httpOptions).pipe(
      map((response: Match[]) => {
        console.log(response["match"]);
        return Match.convMatchJson(response["match"]);
      })
    );
  }

  getTeambyID(id :number): Observable<Team>{
    const url = "http://api.football-data.org/v2/teams" + "/" + id;
    console.log(url);
    return this.http.get(url, httpOptions).pipe(
      map((response: Team[]) => {
        console.log(response);
        return Team.convTeamJson(response);
      })
    );
  }

  getData(url: string) {
    return this.http.get(url, {
      headers: { "X-Auth-Token": "aa89ef54a73b4df6a2e389906426b90b" }
    });
  }
}
