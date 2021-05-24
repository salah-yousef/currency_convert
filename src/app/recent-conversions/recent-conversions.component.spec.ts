import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentConversionsComponent } from './recent-conversions.component';

describe('RecentConversionsComponent', () => {
  let component: RecentConversionsComponent;
  let fixture: ComponentFixture<RecentConversionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentConversionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentConversionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
