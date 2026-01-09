import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Larssen } from './larssen';

describe('Larssen', () => {
  let component: Larssen;
  let fixture: ComponentFixture<Larssen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Larssen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Larssen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
