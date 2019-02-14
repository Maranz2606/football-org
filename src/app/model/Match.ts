export class Match{

idmatch: number;
awayTeam: string;
idAwayTeam: number;
homeTeam: string;
idHomeTeam: number;
awayScore: number;
homeScore: number;
matchday: number;
matchdate: string;
matcherefrees: [];

static convMatchJson(json:any): Match {

  const match = new Match();
  match.idmatch = json.id;
  match.awayTeam = json.awayTeam.name;
  match.idAwayTeam = json.awayTeam.id;
  match.homeTeam = json.homeTeam.name;
  match.idHomeTeam = json.homeTeam.id;
  match.awayScore = json.score.fullTime.awayTeam;
  match.homeScore = json.score.fullTime.homeTeam;
  match.matchday = json.matchday;
  match.matchdate = new Date(json.utcDate).toLocaleDateString();
  match.matcherefrees =  json.referees;
  return match;

}
}
