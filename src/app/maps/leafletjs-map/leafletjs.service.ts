import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LeafletjsService {
  private leafMap: L.Map;

  constructor() {}

  public initMap(selector: string): void {
    this.leafMap = L.map(selector).setView([51.1113, 17.0289], 3);
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 2,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.leafMap);
  }

  public getMap(): L.Map {
    return this.leafMap;
  }

  public routing(lat, lng): void {
    L.Routing.control({
      router: L.Routing.mapbox(environment.accessToken, {}),
      fitSelectedRoutes: true,
      // @ts-ignore
      createMarker: () => null,
      show: true,
      lineOptions: {
        styles: [{ color: '#004C93' }],
        addWaypoints : false,
        extendToWaypoints: false,
        missingRouteTolerance: 0,
      },
      routeWhileDragging: false,
      waypoints: [
        L.latLng(lat, lng),
        L.latLng(lat + 0.1, lng + 0.2),
        L.latLng(lat, lng + 0.3),
        L.latLng(lat - 0.1, lng + 0.4)
      ]
    }).addTo(this.leafMap);
  }
}

