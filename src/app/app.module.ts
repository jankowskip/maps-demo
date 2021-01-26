import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeafletjsMapComponent } from './maps/leafletjs-map/leafletjs-map.component';
import { LeafletjsMapAssetDetailsComponent } from './maps/leafletjs-map/leafletjs-map-asset-details/leafletjs-map-asset-details.component';
import { LeafletjsMapAssetsComponent } from './maps/leafletjs-map/leafletjs-map-assets/leafletjs-map-assets.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OpenLayersMapComponent } from './maps/open-layers-map/open-layers-map/open-layers-map.component';
import { OpenLayersMapAssetsComponent } from './maps/open-layers-map/open-layers-map/open-layers-map-assets/open-layers-map-assets.component';
import { MapboxMapComponent } from './maps/mapbox-map/mapbox-map.component';
import { MapboxMapAssetsComponent } from './maps/mapbox-map/mapbox-map-assets/mapbox-map-assets.component';
import { HttpClientModule } from '@angular/common/http';
import { MapboxMapDetailsComponent } from './maps/mapbox-map/mapbox-map-details/mapbox-map-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LeafletjsMapComponent,
    LeafletjsMapAssetDetailsComponent,
    LeafletjsMapAssetsComponent,
    OpenLayersMapComponent,
    OpenLayersMapAssetsComponent,
    MapboxMapComponent,
    MapboxMapAssetsComponent,
    MapboxMapDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
