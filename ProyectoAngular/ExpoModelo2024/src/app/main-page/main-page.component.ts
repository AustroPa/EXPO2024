  import { Component, HostListener } from '@angular/core';

  @Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
  })
  export class MainPageComponent {

    isScrolled = false;

    @HostListener('window:scroll', [])
    onScroll(): void {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      this.isScrolled = scrollPosition > 0;
    }

    titles = [
      "Planta Baja",
      "Primer Piso"
    ];
  
    slides: {image: string; text?: string}[] = [
      {image: '/assets/PlantaBaja.png', text: "Planta Baja"},
      {image: '/assets/PlantaAlta.png', text: "Planta Alta"}
    ];
    noWrapSlides = true;

  }
 