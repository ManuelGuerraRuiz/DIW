import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelPageComponent } from './intel-page.component';

describe('IntelPageComponent', () => {
  let component: IntelPageComponent;
  let fixture: ComponentFixture<IntelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntelPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
