import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafletjsMapAssetsComponent } from './leafletjs-map-assets.component';

describe('LeafletjsMapAssetsComponent', () => {
  let component: LeafletjsMapAssetsComponent;
  let fixture: ComponentFixture<LeafletjsMapAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeafletjsMapAssetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafletjsMapAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
