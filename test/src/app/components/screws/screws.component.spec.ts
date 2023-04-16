import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrewsComponent } from './screws.component';

describe('ScrewsComponent', () => {
  let component: ScrewsComponent;
  let fixture: ComponentFixture<ScrewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
