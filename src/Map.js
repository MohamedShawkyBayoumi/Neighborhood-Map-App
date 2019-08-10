import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import MarkerInfoWindow from './MarkerInfoWindow';
import { compose } from "recompose";

const Map = (({v, withStateHandlers, venue, onToggleOpen, placeToShow, isOpen}) =>
  
  <GoogleMap
    //onTilesLoaded={() => {this.handleError}}
    defaultZoom={13}
    defaultCenter={{lat: 25.7247878, lng: 32.6270236}}
  >
    {v.map(marker =>
      <MarkerInfoWindow
      key={marker.id}
      marker={marker}
      withStateHandlers= {withStateHandlers}
      venue={venue}
      onToggleOpen={() => {onToggleOpen(marker.id)}}
      placeToShow={placeToShow}
      isOpen = {isOpen}
      />
    )}
  </GoogleMap>
);

export default compose(
  withScriptjs,
  withGoogleMap
)(Map)


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