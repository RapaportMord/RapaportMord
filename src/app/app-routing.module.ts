import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './copmonents/welcome-page/welcome-page.component';
import { InputPageComponent } from './copmonents/input-page/input-page.component';
import { CardsComponent } from './copmonents/cards/cards.component';

const routes: Routes = [
  {path: '', component: WelcomePageComponent, pathMatch: 'full'},
  {path: 'input-page', component: InputPageComponent},
  {path: 'card-page', component: CardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
