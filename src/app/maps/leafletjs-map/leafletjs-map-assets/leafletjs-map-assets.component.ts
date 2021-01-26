import { Component, OnDestroy, OnInit } from '@angular/core';
import * as L from 'leaflet';
import * as Cluster from 'leaflet.markercluster';
import { LeafletjsService } from '../leafletjs.service';
import { Router } from '@angular/router';
import { generateCoordinates } from '../../utils/generateCoordinates';

@Component({
  selector: 'app-leafletjs-map-assets',
  templateUrl: './leafletjs-map-assets.component.html',
  styleUrls: ['./leafletjs-map-assets.component.scss']
})
export class LeafletjsMapAssetsComponent implements OnInit, OnDestroy {
  leafMap: L.Map;
  markers;

  constructor(private leafletjsService: LeafletjsService, private router: Router) { }

  ngOnInit(): void {
    this.leafMap = this.leafletjsService.getMap();
    this.generateMarkers(200);
  }

  private generateMarkers(numberOfMarkers): void {
    this.markers = new Cluster.MarkerClusterGroup(
      {
        iconCreateFunction(cluster): L.DivIcon {
          return L.divIcon({ html: cluster.getChildCount(), className: 'leaflet-cluster' });
        }
      }
    );
    generateCoordinates(numberOfMarkers).forEach(({lng, lat}) => {
      const marker = this.createMarker(lat, lng);
      this.markers.addLayer(marker);
    });
    this.leafMap.addLayer(this.markers);
  }

  private createMarker(lat: number, lng: number): L.Marker {
    return new L.Marker([lat, lng], {
      icon: new L.DivIcon({
        className: 'my-div-icon',
        html: '<div class="leaf-marker-container">' +
          '<img src="assets/marker-truck.png"/>' +
          '<span class="leaf-marker-label">DWR-534534</span>' +
          '</div>'
      })
    }).on('click', this.onMarkerClick);
  }

  onMarkerClick = () => {
    this.router.navigate(['leafletjs/details']);
  }

  ngOnDestroy(): void {
    this.leafMap.removeLayer(this.markers);
  }



}
