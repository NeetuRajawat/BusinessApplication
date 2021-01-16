import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibilityCalcComponent } from './eligibility-calc.component';

describe('EligibilityCalcComponent', () => {
  let component: EligibilityCalcComponent;
  let fixture: ComponentFixture<EligibilityCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EligibilityCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EligibilityCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
