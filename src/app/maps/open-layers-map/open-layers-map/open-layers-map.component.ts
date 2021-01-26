import { Component, OnInit } from '@angular/core';
import { OpenLayersService } from '../open-layers.service';
import Map from 'ol/Map';

@Component({
  selector: 'app-open-layers-map',
  templateUrl: './open-layers-map.component.html',
  styleUrls: ['./open-layers-map.component.scss']
})
export class OpenLayersMapComponent implements OnInit {
  public openLayersMap: Map;

  constructor(private openLayersService: OpenLayersService) { }

  ngOnInit(): void {
    this.openLayersService.initMap('open_layers_map');
    this.openLayersMap = this.openLayersService.getMap();
  }

}
