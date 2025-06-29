import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoAdminComponent } from './tiposadmin.component';

describe('TiposadminComponent', () => {
  let component: TipoAdminComponent;
  let fixture: ComponentFixture<TipoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipoAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
