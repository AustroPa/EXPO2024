import {  Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-image-popup',
  templateUrl: './image-popup.component.html',
  styleUrls: ['./image-popup.component.css'],
  standalone:true
})
export class ImagePopupComponent implements OnInit {
  
  @Output() closePopupEvent: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closePopup() {
    this.closePopupEvent.emit();
  }
}

