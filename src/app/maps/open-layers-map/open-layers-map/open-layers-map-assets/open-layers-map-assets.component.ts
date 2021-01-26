import { Component, OnInit } from '@angular/core';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Fill, Icon, Style, Text } from 'ol/style';
import IconAnchorUnits from 'ol/style/IconAnchorUnits';
import VectorSource from 'ol/source/Vector';
import { Vector as VectorLayer } from 'ol/layer';
import Map from 'ol/Map';
import { OpenLayersService } from '../../open-layers.service';
import { generateCoordinates } from '../../../utils/generateCoordinates';
import { fromLonLat } from 'ol/proj';
import { Cluster } from 'ol/source';
import CircleStyle from 'ol/style/Circle';

@Component({
  selector: 'app-open-layers-map-assets',
  templateUrl: './open-layers-map-assets.component.html',
  styleUrls: ['./open-layers-map-assets.component.scss']
})
export class OpenLayersMapAssetsComponent implements OnInit {
  public openLayersMap: Map;

  constructor(private openLayersService: OpenLayersService) {
  }

  ngOnInit(): void {
    this.openLayersMap = this.openLayersService.getMap();
    const markers = generateCoordinates(250).map(({ lat, lng }) => this.createMarker(lat, lng));
    this.addMarkersToMap(markers);
  }

  createMarker(lat: number, lng: number): Feature {
    const iconFeature = new Feature({
      type: 'icon',
      geometry: new Point(fromLonLat([lat, lng])),
      population: 4000,
      rainfall: 500,
    });
    const iconStyle = this.getIconStyle();
    iconFeature.setStyle(iconStyle);
    return iconFeature;
  }

  addMarkersToMap(markers: Feature[]): void {
    const source = new VectorSource({
      features: markers,
    });
    const clusterSource = new Cluster({
      source,
      distance: 100,
    });
    const vectorLayer = new VectorLayer({
      source: clusterSource,
      style: (feature) => {
        const size = feature.get('features').length;
        if (size < 3 ) {
          return this.getIconStyle();
        }
        return new Style({
          image: new CircleStyle({
            radius: 20,
            fill: new Fill({
              color: '#004C93',
            }),
          }),
          text: new Text({
            text: size.toString(),
            fill: new Fill({
              color: '#fff',
            }),
          }),
        });
      },
    });
    this.openLayersMap.addLayer(vectorLayer);
  }


  getIconStyle(): Style {
    return new Style({
      image: new Icon({
        anchor: [0, 0],
        anchorXUnits: IconAnchorUnits.FRACTION,
        anchorYUnits: IconAnchorUnits.PIXELS,
        src: 'assets/marker-truck.png',
      }),
    });
  }
}
