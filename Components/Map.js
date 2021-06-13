import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Text } from 'react-native';
import apikey from '../assets/apikey';


const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MyComponent() {
  const { isLoaded, loadError} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apikey
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <>
    <Text>GoogleMap?</Text>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
      </>
  ) : <Text></Text>
}

export default React.memo(MyComponent)