

export class Team{

  id: number;
  name: string;
  venue: string;
  activecomp: [];
  squad: [];

  static convTeamJson(json:any): Team {

    const team = new Team();
    team.id = json.id;
    team.name = json.name;
    team.venue = json.venue;
    team.squad = json.squad;
    team.activecomp = json.activeCompetitions;
    return team;

  }
}
