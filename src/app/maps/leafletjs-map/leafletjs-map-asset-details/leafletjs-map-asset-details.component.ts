import { Component, OnInit } from '@angular/core';
import { LeafletjsService } from '../leafletjs.service';
import * as L from 'leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

@Component({
  selector: 'app-leafletjs-map-asset-details',
  templateUrl: './leafletjs-map-asset-details.component.html',
  styleUrls: ['./leafletjs-map-asset-details.component.scss']
})
export class LeafletjsMapAssetDetailsComponent implements OnInit {
  leafMap: L.Map;

  constructor(private leafletjsService: LeafletjsService) { }

  ngOnInit(): void {
    this.leafMap = this.leafletjsService.getMap();
    const marker = this.createDetailsMarker(12, 12);
    const markerCoor = marker.getLatLng();
    this.leafMap.flyTo(markerCoor, 14);
    this.leafletjsService.routing(markerCoor.lat, markerCoor.lng);
    this.searchInput();
  }

  private createDetailsMarker(lat: number, lng: number): L.Marker {
    return new L.Marker([lat, lng], {
      icon: new L.DivIcon({
        className: 'my-div-icon',
        html: '<div class="leaf-marker-container">' +
          '<img src="assets/marker-truck.png"/>' +
          '<span class="leaf-marker-label">DWR-534534</span>' +
          '</div>'
      })
    }).addTo(this.leafMap);
  }

  private searchInput(): void {
    const provider = new OpenStreetMapProvider();
    const searchControl = new GeoSearchControl({
      provider,
      options: { position: 'bottomleft', }
    });
    this.leafMap.addControl(searchControl);
  }
}
