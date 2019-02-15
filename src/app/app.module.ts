import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchComponent } from './match/match.component';
import { MatchDetailComponent } from './match-detail/match-detail.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    MatchComponent,
    MatchDetailComponent,
    TeamDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
