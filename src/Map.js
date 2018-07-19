import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
const { compose, withProps, withStateHandlers } = require("recompose");
//const FaAnchor = require("./src/images/pharaoh");


{console.log(this.props.venue)}

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

  

    <Marker
      position={{ lat: 25.7188346, lng: 32.6550816 }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen &&
      <InfoWindow onCloseClick={props.onToggleOpen}>
        <h1>Just for testing</h1>
      </InfoWindow>}
    </Marker>
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