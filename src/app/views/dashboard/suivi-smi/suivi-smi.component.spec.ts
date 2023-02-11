import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviSMIComponent } from './suivi-smi.component';

describe('SuiviSMIComponent', () => {
  let component: SuiviSMIComponent;
  let fixture: ComponentFixture<SuiviSMIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviSMIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuiviSMIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
