import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaHinchaComponent } from './vista-hincha.component';

describe('VistaHinchaComponent', () => {
  let component: VistaHinchaComponent;
  let fixture: ComponentFixture<VistaHinchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VistaHinchaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaHinchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
