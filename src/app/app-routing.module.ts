import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LeafletjsMapComponent } from './maps/leafletjs-map/leafletjs-map.component';
import { LeafletjsMapAssetDetailsComponent } from './maps/leafletjs-map/leafletjs-map-asset-details/leafletjs-map-asset-details.component';
import { LeafletjsMapAssetsComponent } from './maps/leafletjs-map/leafletjs-map-assets/leafletjs-map-assets.component';
import { OpenLayersMapComponent } from './maps/open-layers-map/open-layers-map/open-layers-map.component';
import { OpenLayersMapAssetsComponent } from './maps/open-layers-map/open-layers-map/open-layers-map-assets/open-layers-map-assets.component';
import { MapboxMapComponent } from './maps/mapbox-map/mapbox-map.component';
import { MapboxMapAssetsComponent } from './maps/mapbox-map/mapbox-map-assets/mapbox-map-assets.component';
import { MapboxMapDetailsComponent } from './maps/mapbox-map/mapbox-map-details/mapbox-map-details.component';

const routes: Routes = [
  {
    path: 'leafletjs',
    component: LeafletjsMapComponent,
    children: [
      {
        path: 'details',
        component: LeafletjsMapAssetDetailsComponent,
      },
      {
        path: '',
        component: LeafletjsMapAssetsComponent,
      },
    ]
  },
  {
    path: 'openlayers',
    component: OpenLayersMapComponent,
    children: [
      {
        path: 'details',
        component: LeafletjsMapAssetDetailsComponent,
      },
      {
        path: '',
        component: OpenLayersMapAssetsComponent,
      },
    ]
  },
  {
    path: 'mapbox',
    component: MapboxMapComponent,
    children: [
      {
        path: 'details',
        component: MapboxMapDetailsComponent
      },
      {
        path: '',
        component: MapboxMapAssetsComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
