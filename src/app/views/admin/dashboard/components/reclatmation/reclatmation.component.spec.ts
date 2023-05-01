import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclatmationComponent } from './reclatmation.component';

describe('ReclatmationComponent', () => {
  let component: ReclatmationComponent;
  let fixture: ComponentFixture<ReclatmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclatmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReclatmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
