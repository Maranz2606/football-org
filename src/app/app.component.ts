import { Component } from '@angular/core';
import { RequestService } from './request.service';
import { Team } from './model/Team';
import { map, finalize } from 'rxjs/operators';
import {Match} from "./model/Match";
import { MatchDetailComponent } from './match-detail/match-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  matches: Match[] = [];
  matchSelected: Match;
  teamSelected: Team;
  loading = false;

  constructor(private request: RequestService) {
    const successhandler = response => {
      console.log(response);
    };

    const errorHandler = error => {
      console.log('error', error);
    };
    this.request.getMatch()
    .pipe(
      finalize(() => this.loading = false)
    ).subscribe(successhandler, errorHandler);
  }

  matchAfterSelection(match: Match) {
    console.log(match.idmatch);
    this.request.getMatchByID(match.idmatch)
      .subscribe(MatchDetail => {
        this.matchSelected = MatchDetail;
      }, (error) => {
        console.log(error);
      });
  }

  teamAfterSelection(id: number) {
    console.log(id);
    this.request.getTeambyID(id)
      .subscribe(TeamDetail => {
        this.teamSelected = TeamDetail;
      }, (error) => {
        console.log(error);
      });
  }

  matchWasSelected(match: Match) {
    this.loading = true;
    this.request.getMatchByID(match.idmatch)
      .pipe(
        finalize(() => this.loading = false)
      ).subscribe(matchDetail => {
        this.matchSelected = matchDetail;
      }, (error) => {
        console.log(error);
      });
  }
}
