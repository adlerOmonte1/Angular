import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostHistoriaComponent } from './post-historia.component';

describe('PostHistoriaComponent', () => {
  let component: PostHistoriaComponent;
  let fixture: ComponentFixture<PostHistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostHistoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
