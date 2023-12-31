import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExternalPageComponent } from './external-page/external-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImagePopupComponent } from './image-popup/image-popup.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

const routes: Routes = [
  { path: 'external-page', component: ExternalPageComponent },

  { path: 'external-page/:id', component: ExternalPageComponent },
  
  { path: 'main-page', component: MainPageComponent },
];


@NgModule({
  

  declarations: [
    AppComponent,
    MainPageComponent,
    
  ],
  imports: [
    RouterModule.forRoot(routes),
    CarouselModule.forRoot(),
    ImagePopupComponent,
    BrowserModule,
    ExternalPageComponent,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }

