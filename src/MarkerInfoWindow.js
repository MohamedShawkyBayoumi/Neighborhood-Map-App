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
                    onClick={this.props.onToggleOpen}
                    >
                
                    {console.log(this.props.marker.location.lat)}
        
                    {console.log(this.props.venue)}
                    {this.props.placeToShow === this.props.marker.id && this.props.isOpen &&
                    <InfoWindow onCloseClick={this.props.onToggleOpen}>
                        <h1>{this.props.marker.name}</h1>
                        
                    </InfoWindow>}
                </Marker>
                
            </div>
        )
    }
}


export default MarkerInfoWindow