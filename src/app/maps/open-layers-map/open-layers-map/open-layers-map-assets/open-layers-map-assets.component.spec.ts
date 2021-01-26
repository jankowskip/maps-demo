import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenLayersMapAssetsComponent } from './open-layers-map-assets.component';

describe('OpenLayersMapAssetsComponent', () => {
  let component: OpenLayersMapAssetsComponent;
  let fixture: ComponentFixture<OpenLayersMapAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenLayersMapAssetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenLayersMapAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
