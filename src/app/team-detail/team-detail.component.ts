import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Team } from "../model/Team";
import { RequestService } from "../request.service";

@Component({
  selector: "app-team-detail",
  templateUrl: "./team-detail.component.html",
  styleUrls: ["./team-detail.component.css"],
  providers: [RequestService]

})
export class TeamDetailComponent implements OnInit {

  @Input()
  team: Team;


  constructor() {}



  ngOnInit() {


  }
}
