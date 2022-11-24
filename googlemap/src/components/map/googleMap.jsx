import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'

const MapContainer=(props) => {
  return (
    
      <Map
      google={props.google}
      style={{ width: '100%', height: '100%' }}
      zoom={8}
      initialCenter={
        {
          lat: 12.972442,
          lng: 77.580643
        }
      }
    >
    </Map>
    
  )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAH4w4WaLHFA0pqM7M0lzifLKkh-GcEJyw'
  })(MapContainer);
