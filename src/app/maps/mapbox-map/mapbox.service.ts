import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MapboxService {
  private mapboxMap: mapboxgl.Map;
  private draw: MapboxDraw;
  style = 'mapbox://styles/mapbox/streets-v11';

  constructor() {}

  public initMap(selector: string): void {
    const accessToken = 'pk.eyJ1IjoicGlvdHJqYW5rb3dza2kiLCJhIjoiY2trYmd0bTVtMDR3bzJvcXJqZmJxNXJxNiJ9.OmWPMZZLejQVLCC9_Wwtrg';
    this.mapboxMap = new mapboxgl.Map({
      container: selector,
      center: [51.1113, 17.0289],
      zoom: 3,
      style: this.style,
      accessToken,
    });
  }
  public getMap(): mapboxgl.Map {
    return this.mapboxMap;
  }
}
