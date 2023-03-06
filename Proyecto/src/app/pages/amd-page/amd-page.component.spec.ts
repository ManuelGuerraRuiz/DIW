import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmdPageComponent } from './amd-page.component';

describe('AmdPageComponent', () => {
  let component: AmdPageComponent;
  let fixture: ComponentFixture<AmdPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmdPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
