import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosthistoriasComponent } from './posthistorias.component';

describe('PosthistoriasComponent', () => {
  let component: PosthistoriasComponent;
  let fixture: ComponentFixture<PosthistoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PosthistoriasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosthistoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
