import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { LeafletjsService } from './leafletjs.service';

@Component({
  selector: 'app-leafletjs-map',
  templateUrl: './leafletjs-map.component.html',
  styleUrls: ['./leafletjs-map.component.scss']
})
export class LeafletjsMapComponent implements AfterViewInit {
  @ViewChild('leaf-map', { static: false }) leafMapDiv: ElementRef;
  leafMap: L.Map;

  constructor(private leafletjsService: LeafletjsService) {

  }

  ngAfterViewInit(): void {
    this.leafletjsService.initMap('leaf-map');
    this.leafMap = this.leafletjsService.getMap();
  }
}
