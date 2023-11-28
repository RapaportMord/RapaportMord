import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './copmonents/welcome-page/welcome-page.component';
import { RouterOutlet } from '@angular/router';
import { InputPageComponent } from './copmonents/input-page/input-page.component';
import { FormsModule } from '@angular/forms';
import { CardsComponent } from './copmonents/cards/cards.component';
import { SingleCardComponent } from './copmonents/single-card/single-card.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    InputPageComponent,
    CardsComponent,
    SingleCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
