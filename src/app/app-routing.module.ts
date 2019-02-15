import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TeamDetailComponent } from "./team-detail/team-detail.component";
import { Team } from "./model/Team";
import { MatchComponent } from "./match/match.component";

const routes: Routes = [
  {
    path: "",
    component: MatchComponent,
    children: [{ path: "teams/:id", component: TeamDetailComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
