import { Injectable } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import { XYZ } from 'ol/source';

@Injectable({
  providedIn: 'root',
})
export class OpenLayersService {
  private openLayersMap: Map;

  constructor() {}

  public initMap(selector: string): void {
    this.openLayersMap = new Map({
      target: selector,
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        center: [51.1113, 17.0289],
        zoom: 3
      })
    });
  }

  public getMap(): Map {
    return this.openLayersMap;
  }
}
