import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Match } from '../model/Match';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  @Input()
  matches: Match [];

  @Output()
  matchSelected = new EventEmitter<Match>();

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.getMatch();
  }

  getMatch(): void {
    this.requestService.getMatch().subscribe(matches => this.matches = matches);
  }

}
