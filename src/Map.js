
import React from 'react';

import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import MarkerInfoWindow from './MarkerInfoWindow'
const { compose, withStateHandlers } = require("recompose");

//const FaAnchor = require("./src/images/pharaoh");




const Map = compose(
  withScriptjs,
  withGoogleMap
)(props =>
  
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{lat: 25.694937, lng: 32.6244474}}
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


  {props.venue.map(marker =>
    <MarkerInfoWindow
    key={marker.id}
    marker={marker}
    withStateHandlers= {props.withStateHandlers}
    venue={props.venue}
    onToggleOpen={() => {props.onToggleOpen(marker.id)}}
    placeToShow={props.placeToShow}
    isOpen = {props.isOpen}
    />
  )}




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