import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterOutputCardComponent } from './converter-output-card.component';

describe('ConverterOutputCardComponent', () => {
  let component: ConverterOutputCardComponent;
  let fixture: ComponentFixture<ConverterOutputCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConverterOutputCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterOutputCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
