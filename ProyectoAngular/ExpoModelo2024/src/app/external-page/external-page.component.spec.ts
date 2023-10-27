import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalPageComponent } from './external-page.component';

describe('ExternalPageComponent', () => {
  let component: ExternalPageComponent;
  let fixture: ComponentFixture<ExternalPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExternalPageComponent]
    });
    fixture = TestBed.createComponent(ExternalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
