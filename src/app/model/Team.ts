enum TeamAtt{
  id = 'id',
  name = 'name'
}

export class Team{

  id: number;
  name: string;

  static convTeamJson(json:any): Team {

    const team = new Team();
    team.id = json[TeamAtt.id];
    team.name = json[TeamAtt.name];
    return team;

  }
}
