import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafletjsMapAssetDetailsComponent } from './leafletjs-map-asset-details.component';

describe('LeafletjsMapAssetDetailsComponent', () => {
  let component: LeafletjsMapAssetDetailsComponent;
  let fixture: ComponentFixture<LeafletjsMapAssetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeafletjsMapAssetDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafletjsMapAssetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
