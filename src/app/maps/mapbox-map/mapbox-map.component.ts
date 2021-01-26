import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { MapboxService } from './mapbox.service';

@Component({
  selector: 'app-mapbox-map',
  templateUrl: './mapbox-map.component.html',
  styleUrls: ['./mapbox-map.component.scss']
})
export class MapboxMapComponent implements AfterViewInit {
  @ViewChild('mapbox-map', { static: false }) mapBoxDiv: ElementRef;
  mapboxMap: mapboxgl.Map;

  constructor(private mapboxService: MapboxService) { }

  ngAfterViewInit(): void {
    this.mapboxService.initMap('mapbox-map');
    this.mapboxMap = this.mapboxService.getMap();

  }

}
