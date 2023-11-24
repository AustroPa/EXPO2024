import { Component,  Input,OnInit } from '@angular/core';
import { ImagePopupComponent } from '../image-popup/image-popup.component';
import { Router } from '@angular/router';
import { ActivatedRoute,ParamMap } from '@angular/router'


import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
import  aula  from '../../assets/infoAulas.json';


@Component({
  selector: 'app-external-page',
  templateUrl: './external-page.component.html',
	standalone: true,
	imports: [NgbCarouselModule, NgIf, NgFor,ImagePopupComponent],
  styleUrls: ['./external-page.component.css'],
	providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class ExternalPageComponent implements OnInit{
	showNavigationArrows = false;
	showNavigationIndicators = false;
	

	// [1055, 194, 268].map((n) => `https://picsum.photos/id/${n}/385`)


	constructor(config: NgbCarouselConfig, private router: Router, private _route : ActivatedRoute) {
		// customize default values of carousels used by this component tree
		config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
		
		// console.log(activatedRoute);
		//console.log(aula);
		//activatedRoute.params.subscribe( prm => {
		//	console.log(`El id es: ${prm['id']}`);
		//	this.id=prm['id'];
		//})
		this.tituloTematica="";
		this.subtituloTematica="";
		this.descripcionAula="";
	}

	images=[{}];
	tituloTematica:String;
	subtituloTematica:String;
	descripcionAula:String;



	ngOnInit() {
	
	  /// this.id = this.route.snapshot.paramMap.get("id");
		let id= +this._route.snapshot.paramMap.get('id')!;

		this.images=aula[(id)].images;
		this.tituloTematica=aula[(id)].tituloTematica;
		this.subtituloTematica=aula[(id)].subtituloTematica;
		this.descripcionAula=aula[(id)].descripcionAula;
			
		
	  
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