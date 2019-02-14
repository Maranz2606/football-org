import { Component, OnInit, Output, Input } from '@angular/core';
import { Match } from '../model/Match';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css']
})
export class MatchDetailComponent implements OnInit {

  @Input()
  match: Match[];

  constructor() { }

  ngOnInit() {
  }

}
