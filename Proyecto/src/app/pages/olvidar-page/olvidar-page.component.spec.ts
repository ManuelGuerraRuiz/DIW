import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlvidarPageComponent } from './olvidar-page.component';

describe('OlvidarPageComponent', () => {
  let component: OlvidarPageComponent;
  let fixture: ComponentFixture<OlvidarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlvidarPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlvidarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
