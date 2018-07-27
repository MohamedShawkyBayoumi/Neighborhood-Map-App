import React from 'react'
import { Marker, InfoWindow } from "react-google-maps"

require("recompose");

class MarkerInfoWindow extends React.Component {

    

    render(){

        return (

            <div>

                <Marker
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