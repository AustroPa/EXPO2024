import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExternalPageComponent } from './external-page/external-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImagePopupComponent } from './image-popup/image-popup.component';

const routes: Routes = [
  { path: 'external-page', component: ExternalPageComponent },
  { path: 'main-page', component: MainPageComponent },
];


@NgModule({
  

  declarations: [
    AppComponent,
    MainPageComponent,
    
  ],
  imports: [
    RouterModule.forRoot(routes),
    ImagePopupComponent,
    BrowserModule,
    ExternalPageComponent,
    AppRoutingModule,
    NgbModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

