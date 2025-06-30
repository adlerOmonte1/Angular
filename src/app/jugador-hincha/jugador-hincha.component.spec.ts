import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorHinchaComponent } from './jugador-hincha.component';

describe('JugadorHinchaComponent', () => {
  let component: JugadorHinchaComponent;
  let fixture: ComponentFixture<JugadorHinchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JugadorHinchaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JugadorHinchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
