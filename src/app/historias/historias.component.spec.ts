import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaComponent } from './historias.component';

describe('HistoriasComponent', () => {
  let component: HistoriaComponent;
  let fixture: ComponentFixture<HistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
