
import React from 'react';

import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import MarkerInfoWindow from './MarkerInfoWindow'
const { compose, withProps, withStateHandlers } = require("recompose");

//const FaAnchor = require("./src/images/pharaoh");




const Map = compose(
  
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  
  <GoogleMap
    defaultZoom={6.78}
    defaultCenter={{lat: 27.9865707, lng: 30.9938622}}
  >

{/*
  {console.log(props.venue)}
  {console.log(props.venue[0].location.lat)}

*/}

{/*
{
  places.map(place =>
    <MarkerInfoWindow
     place={place}
     // pass other stuff you need to show the Marker and InfoWindow
    />
  )
}
*/}

  <MarkerInfoWindow
  withStateHandlers= {props.withStateHandlers}
  venue={props.venue}
  onToggleOpen={props.onToggleOpen}
  isOpen = {props.isOpen}
  />

  </GoogleMap>
);

export default Map


/*
<GoogleMap>
{I map through an array with places and for each place display marker}
    <Marker>
   {if selected marker's id is equal to place id & marker was clicked I show a proper info window}
         <InfoWindow>
        </InfoWindow>
    </Marker>
</GoogleMap>
*/