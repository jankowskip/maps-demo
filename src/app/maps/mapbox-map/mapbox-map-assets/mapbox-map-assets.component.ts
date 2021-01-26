import { Component, OnDestroy, OnInit } from '@angular/core';
import { MapboxService } from '../mapbox.service';
import * as mapboxgl from 'mapbox-gl';
import { generateCoordinates } from '../../utils/generateCoordinates';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mapbox-map-assets',
  templateUrl: './mapbox-map-assets.component.html',
  styleUrls: ['./mapbox-map-assets.component.scss']
})
export class MapboxMapAssetsComponent implements OnInit, OnDestroy {
  public mapboxMap: mapboxgl.Map;
  markers = [];

  constructor(private mapboxService: MapboxService, private router: Router) { }

  ngOnInit(): void {
    this.mapboxMap = this.mapboxService.getMap();
    generateCoordinates(200).forEach(({lng, lat}) => this.markers.push(this.createMarker(lat, lng)));
  }

  createMarker(lat, lng): mapboxgl.Marker {
    const marker = document.createElement('div');
    marker.className = 'mapbox-marker';
    const label = document.createElement('span');
    label.className = 'mapbox-label';
    label.textContent = 'DWR-5342';
    marker.appendChild(label);
    const mapboxMarker =  new mapboxgl.Marker(marker)
      .setLngLat([lat, lng])
      .addTo(this.mapboxMap);
    mapboxMarker.getElement().addEventListener('click', () => {
      this.router.navigate(['mapbox/details']);
    });
    return mapboxMarker;
  }

  ngOnDestroy(): void {
    this.markers.forEach(marker => marker.remove());
  }

}
