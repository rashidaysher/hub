import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { GithubAppComponent } from './github-app/github-app.component';
import { GitProfileComponent } from './git-profile/git-profile.component';
import { GitProfileCardComponent } from './git-profile-card/git-profile-card.component';
import { GitProfileDataComponent } from './git-profile-data/git-profile-data.component';
import { GitReposComponent } from './git-repos/git-repos.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubAppComponent,
    GitProfileComponent,
    GitProfileCardComponent,
    GitProfileDataComponent,
    GitReposComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
