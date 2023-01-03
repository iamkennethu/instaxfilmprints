import * as React from 'react';
import Map, {Marker, NavigationControl} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function App() {
  return (
    
    <div>
      <Map mapLib={maplibregl} 
        initialViewState={{
          longitude: 120.816040,
          latitude: 14.852739,
          zoom: 13
        }}
        style={{width: "100%", height: "100vh"}}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=24r7saogNuX4CEIicMhK">

        <NavigationControl position="bottom-left" />
        <Marker
        longitude={120.816040}
        latitude={14.852739}
        color="#40cee2">
        </Marker>
      </Map>

    </div>
  );
}
