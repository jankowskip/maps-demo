import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapboxMapAssetsComponent } from './mapbox-map-assets.component';

describe('MapboxMapAssetsComponent', () => {
  let component: MapboxMapAssetsComponent;
  let fixture: ComponentFixture<MapboxMapAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapboxMapAssetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapboxMapAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
