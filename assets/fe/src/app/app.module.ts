import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UIRouterModule } from '@uirouter/angular';
import { APP_STATES } from './app.states';

import { AppComponent } from './app.component';
import { CreateTeamComponent } from './components/forms/create-team/create-team.component';
import { JoinTeamComponent } from './components/prompts/join-team/join-team.component';
import { SlackLoginComponent } from './components/prompts/slack-login/slack-login.component';
import { ScrumboardComponent } from './components/containers/scrumboard/scrumboard.component';


@NgModule({
  declarations: [
    AppComponent,
    JoinTeamComponent,
    CreateTeamComponent,
    SlackLoginComponent,
    ScrumboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UIRouterModule.forRoot(APP_STATES),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
