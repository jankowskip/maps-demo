import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafletjsMapComponent } from './leafletjs-map.component';

describe('LeafletjsMapComponent', () => {
  let component: LeafletjsMapComponent;
  let fixture: ComponentFixture<LeafletjsMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeafletjsMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafletjsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
