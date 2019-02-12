


export class User {
userId: number;
id: number;
name: string;
street: string;
city: string ;
company: string;


static convJson(json: any): User {
const user = new User();
user.id = json.id;
user.name = json.name;
user.street = json.address.street;
user.city = json.address.city;
user.company = json.company;

return user;
}
}

