import React from 'react'
import { Marker, InfoWindow, GoogleMap } from "react-google-maps"

require("recompose");

function makeMarkerIcon(markerColor) {
    var markerImage = new GoogleMap.maps.MarkerImage(
        'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor + '|40|_|%E2%80%A2',
        new google.maps.Size(21, 34),
        new google.maps.Point(0, 0),
        new google.maps.Point(10, 34),
        new google.maps.Size(21, 34))
        return markerImage
    
}

const iconDefault = makeMarkerIcon('0091ff');
const iconOpen = makeMarkerIcon('FFFF24');

class MarkerInfoWindow extends React.Component {

    

    render(){

        return (

            <div>

                <Marker
                    icon={this.props.placeToShow === this.props.marker.id && this.props.isOpen ? { url: iconOpen } : { url: iconDefault }}
                    key={this.props.marker.id}
                    position={{lat: this.props.marker.location.lat, lng: this.props.marker.location.lng}}
                    onClick={() => this.props.onToggleOpen(this.props.marker.id)}
                    >
                    {this.props.placeToShow === this.props.marker.id && this.props.isOpen &&
                    <InfoWindow onCloseClick={this.props.onToggleOpen}>
                        <div className='info-window'>
                            <h1>{this.props.marker.name}</h1>
                            <p className='info-address'>
                                <span>Adress: </span>
                                {`${this.props.marker.location.formattedAddress[0]}, 
                                ${this.props.marker.location.formattedAddress[1]}, 
                                ${this.props.marker.location.formattedAddress[2]}
                            `}</p>
                            <a target='_blank' rel="noopener noreferrer" href={`https://www.google.com.eg/maps/?q=${this.props.marker.location.lat},${this.props.marker.location.lng}`}>Check that</a>
                        </div>
                    </InfoWindow>}
                </Marker>
                
            </div>
        )
    }
}


export default MarkerInfoWindow