import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapboxMapDetailsComponent } from './mapbox-map-details.component';

describe('MapboxMapDetailsComponent', () => {
  let component: MapboxMapDetailsComponent;
  let fixture: ComponentFixture<MapboxMapDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapboxMapDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapboxMapDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
