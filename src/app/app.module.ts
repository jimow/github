import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DateagoPipe } from './dateago.pipe';
import { HighlightRepoNameDirective } from './highlight-repo-name.directive';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    AboutComponent,
    ContactComponent,
    DateagoPipe,
    HighlightRepoNameDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
