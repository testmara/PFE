import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviTOEICComponent } from './suivi-toeic.component';

describe('SuiviTOEICComponent', () => {
  let component: SuiviTOEICComponent;
  let fixture: ComponentFixture<SuiviTOEICComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviTOEICComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuiviTOEICComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
