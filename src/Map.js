import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = withScriptjs(withGoogleMap((props) => {
  return (
    <GoogleMap defaultZoom={6.78}
        center={{lat: 27.9865707, lng: 30.9938622}}>
          <Marker position={{lat: 25.7188346, lng: 32.6550816}}/>
    </GoogleMap>
  )
}))

export default Map