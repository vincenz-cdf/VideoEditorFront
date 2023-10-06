import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerushComponent } from './derush.component';

describe('DerushComponent', () => {
  let component: DerushComponent;
  let fixture: ComponentFixture<DerushComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DerushComponent]
    });
    fixture = TestBed.createComponent(DerushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
