import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ExternalPageComponent } from './external-page/external-page.component';

const routes: Routes = [
  {path: 'mainPage', component: MainPageComponent},
  {path: 'externalPage', component: ExternalPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
