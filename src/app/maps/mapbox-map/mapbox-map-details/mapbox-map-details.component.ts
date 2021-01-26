import { Component, OnDestroy, OnInit } from '@angular/core';
import { MapboxService } from '../mapbox.service';
import { environment } from '../../../../environments/environment';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapbox-map-details',
  templateUrl: './mapbox-map-details.component.html',
  styleUrls: ['./mapbox-map-details.component.scss']
})
export class MapboxMapDetailsComponent implements OnInit, OnDestroy {
  mapboxMap: mapboxgl.Map;
  mapboxDirections;
  mapboxGeocoding;

  constructor(private mapboxService: MapboxService) { }

  ngOnInit(): void {
    this.mapboxMap = this.mapboxService.getMap();
    this.mapboxDirections = new MapboxDirections({
      accessToken: environment.accessToken
    });
    this.mapboxMap.addControl(
      this.mapboxDirections,
      'top-right'
    );
    this.mapboxGeocoding = new MapboxGeocoder({
      accessToken: environment.accessToken,
      mapboxgl: this.mapboxMap,
      marker: false,
    });
    this.mapboxMap.addControl(this.mapboxGeocoding);

  }

  ngOnDestroy(): void {
    this.mapboxMap.removeControl(this.mapboxGeocoding);
    this.mapboxMap.removeControl(this.mapboxDirections);
  }

}
