import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FPSGameComponent } from './fpsgame.component';

describe('FPSGameComponent', () => {
  let component: FPSGameComponent;
  let fixture: ComponentFixture<FPSGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FPSGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FPSGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
