import React, { useState } from 'react'
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react'
import { markerData } from '../redux/action'
import { connect, useDispatch, useSelector } from 'react-redux';

const MapContainer=(props) => {
  const dispatch = useDispatch()
  const result = useSelector((state) => state.markerReducer)
  console.log(result, "added result")
    const [view, setView] = useState([
        { latitude: 13.929930, longitude: 75.568100 },
        { latitude: 13.338263, longitude: 77.101410 },
        { latitude: 12.972442, longitude: 77.580643 },
        { latitude: 13.744763, longitude: 76.89895 },
        { latitude: 14.2679544, longitude: 75.3560649 },
        { latitude: 47.5524695, longitude: -122.0425407 }
      ])

      const displayMarkers = () => {
        return view.map((store, index) => {
          return <Marker key={index} id={index} position={{
            lat: store.latitude,
            lng: store.longitude
          }}
            onClick={() => {
              dispatch(markerData(store))
              console.log("You clicked me!", store)
            }
    
            } />
        })
      }
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
        {
             displayMarkers()
        }
        {/* <Marker 
            position={{ lat: 13.929930, lng: 75.568100}}
            // position={{ lat: 13.338263, lng: 77.101410}}
            >I am here</Marker> */}
    </Map>
    
  )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAH4w4WaLHFA0pqM7M0lzifLKkh-GcEJyw'
  })(MapContainer);
