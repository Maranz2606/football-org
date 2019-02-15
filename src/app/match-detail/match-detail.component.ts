import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Match } from '../model/Match';
import { Team } from '../model/Team';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css']
})
export class MatchDetailComponent implements OnInit {

  @Input()
  match: Match;
  @Input()
  team: Team;

  @Output()
  teamSelected = new EventEmitter<Team>();

  constructor() { }

  ngOnInit() {
  }

}
