import { Component } from "@angular/core";
import { RequestService } from "./request.service";
import { Team } from './model/Team';
import { map } from 'rxjs/operators';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "main";

  constructor(private request: RequestService) {
   const successhandler = response => {
      console.log(response);}

    const errorHandler = error => {
      console.log("error", error);
    };
    this.request.getComp().subscribe(successhandler, errorHandler);
  }
}
