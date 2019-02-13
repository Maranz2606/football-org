export class Match{

awayTeam: string;
homeTeam: string;
awayScore: number;
homeScore: number;

static convMatchJson(json:any): Match {

  const match = new Match();
  match.awayTeam = json.awayTeam.name;
  match.homeTeam = json.homeTeam.name;
  match.awayScore = json.score.fullTime.awayTeam;
  match.homeScore = json.score.fullTime.homeTeam;
  return match;

}
}
