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
    images = [
      "/assets/PlantaAlta.png",
      "/assets/PlantaBaja.png",
      "/assets/PlantaNueva.png"
    ];
    currentSlideIndex = 0;

    handleMouseWheel(event: WheelEvent) {
      // Detecta la dirección de la rueda del ratón y desplaza el carrusel en consecuencia
      if (event.deltaY > 0) {
        this.nextSlide();
      } else if (event.deltaY < 0) {
        this.prevSlide();
      }
      // Evita el comportamiento predeterminado del desplazamiento de la rueda
      event.preventDefault();
    }
  
    prevSlide() {
      this.currentSlideIndex = (this.currentSlideIndex - 1 + this.images.length) % this.images.length;
    }
  
    nextSlide() {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.images.length;
    }
  
    constructor() {
      console.log(this.images);
    }
  }
