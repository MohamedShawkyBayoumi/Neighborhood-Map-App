import React from 'react';
import { Marker, InfoWindow } from "react-google-maps";

/*
function makeMarkerIcon(markerColor) {
    var markerImage = new GoogleMap.maps.MarkerImage(
        'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor + '|40|_|%E2%80%A2',
        new google.maps.Size(21, 34),
        new google.maps.Point(0, 0),
        new google.maps.Point(10, 34),
        new google.maps.Size(21, 34))
        return markerImage
}
*/


const iconDefault = 'http://maps.google.com/mapfiles/ms/icons/blue.png';
const iconOpen = 'http://maps.google.com/mapfiles/ms/icons/red.png';


class MarkerInfoWindow extends React.Component {
    render(){
        const {
            placeToShow,
            marker,
            isOpen,
            onToggleOpen
        } = this.props;
        return (
            <div>
                <Marker
                    icon={placeToShow === marker.id && isOpen ? { url: iconOpen } : { url: iconDefault }}
                    key={marker.id}
                    position={{lat: marker.location.lat, lng: marker.location.lng}}
                    onClick={() => onToggleOpen(marker.id)}
                    >
                    {placeToShow === marker.id && isOpen &&
                        <InfoWindow onCloseClick={onToggleOpen}>
                            <div className='info-window'>
                                <h1>{marker.name}</h1>
                                <p className='info-address'>
                                    <span>Adress: </span>
                                    {`${marker.location.formattedAddress[0]}, 
                                    ${marker.location.formattedAddress[1]}, 
                                    ${marker.location.formattedAddress[2]}
                                `}</p>
                                <a target='_blank' rel="noopener noreferrer" href={`https://www.google.com.eg/maps/?q=${marker.location.lat},${marker.location.lng}`}>Check that</a>
                                {/* <img src={`${marker.categories[0].icon.prefix}${marker.categories[0].icon.suffix}`} /> */}
                            </div>
                        </InfoWindow>
                    }
                </Marker>
            </div>
        )
    }
}


export default MarkerInfoWindow;