import { identifierModuleUrl } from "@angular/compiler";

enum squadAttributes {
  id = "id",
  name = "name",
  position = "position",
  //dateOfBirth = "dateOfBirth",
  //countryOfBirth = "countryOfBirth",
  nationality = "nationality",
  role = "role"
}

export class Squad {
  id: number;
  name: string;
  position: string;
  nationality: string;
  role: string;

  static convSquadJson(json: any): Squad {
    const squad = new Squad();
    squad.id = json[squadAttributes.id];
    squad.name = json[squadAttributes.name];
    squad.position = json[squadAttributes.position];
    squad.nationality = json[squadAttributes.nationality];
    squad.role = json[squadAttributes.role];
    return squad;
  }
}
