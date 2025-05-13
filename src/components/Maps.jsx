import React, { useCallback, useRef, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 27.7172,
  lng: 85.3240
};

const Maps = () => {
  const mapRef = useRef(null);
  const [markers, setMarkers] = useState([]);
  const [mapLoaded, setMapLoaded] = useState(false);

  const onLoad = useCallback(map => {
    mapRef.current = map;
    setMapLoaded(true);
  }, []);

  const onMapClick = useCallback((e) => {
    const newMarker = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
      time: new Date()
    };
    setMarkers(current => [...current, newMarker]);
  }, []);

  const onZoomChanged = () => {
    if (mapRef.current) {
      const zoom = mapRef.current.getZoom();
      console.log('Current zoom level:', zoom);
    }
  };

  return (
    <LoadScript 
      googleMapsApiKey="AIzaSyDBwcU96tdvsjyzel7wUrMQq80TorwJ2NA"
      onLoad={() => console.log('Script loaded')}
      onError={(error) => console.error('Error loading Google Maps:', error)}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={onLoad}
        onClick={onMapClick}
        onZoomChanged={onZoomChanged}
      >
        {mapLoaded && markers.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={window.google && window.google.maps && {
              scaledSize: new window.google.maps.Size(40, 40)
            }}
          />
        ))}
      </GoogleMap>  
    </LoadScript>
  );
};

export default Maps;