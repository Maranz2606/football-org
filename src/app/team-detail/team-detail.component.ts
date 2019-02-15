import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Team } from "main/src/app/model/Team";
import { RequestService } from "../request.service";

@Component({
  selector: "app-team-detail",
  templateUrl: "./team-detail.component.html",
  styleUrls: ["./team-detail.component.css"],
  providers: [RequestService]

})
export class TeamDetailComponent implements OnInit {

  @Input()
  title = "Partite e risultati per oggi";
  url = "https://api.football-data.org/v2/teams";
  team = {};


  constructor(private service: RequestService,  private route: ActivatedRoute) {}

  getTeam() : void {
    const id = this.route.snapshot.paramMap.get("id"); //id parameter that defines the team to search
    const urlReq = `${this.url}/${id}`; //enddpoint correctly builded by concat url/id
    this.service.getData(urlReq)
      .subscribe(
        data => {
          this.team = data;
          console.log(data);
        },
        error=> console.log(error)
      )
    }

  ngOnInit(): void {
    this.getTeam();

  }
}
