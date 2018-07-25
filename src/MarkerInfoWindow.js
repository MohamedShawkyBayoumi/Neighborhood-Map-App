import React from 'react'
import { Marker, InfoWindow } from "react-google-maps"

require("recompose");

class MarkerInfoWindow extends React.Component {

    

    render(){
        console.log(this.props.venue)
        this.props.venue.map(venue => {
            console.log(venue)

            const position = {lat: 25.7188346, lng: 32.6550816}
        })
        return (

            <div>
                {this.props.venue.map(marker => {
                    
                    <Marker
                    position={{lat: marker.location.lat, lng: marker.location.lng}}
                    onClick={this.props.onToggleOpen}
                    >
                
                    {console.log(marker.location.lat)}
        
                    {console.log(this.props.venue[0].name)}
                    {this.props.isOpen &&
                    <InfoWindow onCloseClick={this.props.onToggleOpen}>
                        <h1>{this.props.venue[0].name}</h1>
                        
                    </InfoWindow>}
                </Marker>
                })}
            </div>
        )
    }
}


export default MarkerInfoWindow