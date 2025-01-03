import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputGameDataComponent } from './input-game-data.component';

describe('InputGameDataComponent', () => {
  let component: InputGameDataComponent;
  let fixture: ComponentFixture<InputGameDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputGameDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputGameDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
