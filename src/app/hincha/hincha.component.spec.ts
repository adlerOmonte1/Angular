import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HinchaComponent } from './hincha.component';

describe('HinchaComponent', () => {
  let component: HinchaComponent;
  let fixture: ComponentFixture<HinchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HinchaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HinchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
