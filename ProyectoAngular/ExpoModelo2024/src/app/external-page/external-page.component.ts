import { Component,  Input } from '@angular/core';
import { ImagePopupComponent } from '../image-popup/image-popup.component';
import { Router } from '@angular/router';


import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-external-page',
  templateUrl: './external-page.component.html',
	standalone: true,
	imports: [NgbCarouselModule, NgIf, NgFor,ImagePopupComponent],
  styleUrls: ['./external-page.component.css'],
	providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class ExternalPageComponent {
	showNavigationArrows = false;
	showNavigationIndicators = false;
	images = [
		"https://img.freepik.com/vector-premium/linea-cuadrada-brillante_1189-1600.jpg",
		"https://img.freepik.com/vector-premium/marco-cuadrado-rosa-claro-cuadrado-rosa-claro-bandera-cuadrada-luz-rosa_1189-2997.jpg",
		"https://img.freepik.com/vector-gratis/galleta-cuadrada-estilo-dibujos-animados-aislado_1308-64646.jpg"
	];
	// [1055, 194, 268].map((n) => `https://picsum.photos/id/${n}/385`)


	constructor(config: NgbCarouselConfig, private router: Router) {
		// customize default values of carousels used by this component tree
		config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
	}

	showImagePopup = false;

  	openImagePopup() {
  	  this.showImagePopup = true;
  	}

  	closeImagePopup() {
  	  this.showImagePopup = false;
  	}

	onClickIrAMainPage() {

	this.router.navigate(['/main-page']);
	}
}