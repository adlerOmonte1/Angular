import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistacategoriaComponent } from './vistacategoria.component';

describe('VistacategoriaComponent', () => {
  let component: VistacategoriaComponent;
  let fixture: ComponentFixture<VistacategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VistacategoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistacategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
