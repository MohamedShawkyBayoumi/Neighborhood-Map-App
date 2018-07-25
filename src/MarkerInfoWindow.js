import React from 'react'
import { Marker, InfoWindow } from "react-google-maps"
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
const { compose, withProps, withStateHandlers } = require("recompose");

class MarkerInfoWindow extends React.Component {
    render(){
        return (
            <Marker
                position={{ lat: 25.7188346, lng: 32.6550816 }}
                onClick={this.props.onToggleOpen}
                >
                {console.log(this.props.onToggleOpen)}
                {console.log(this.props.withStateHandlers)}
                {console.log(this.props.venue[0].name)}
                {this.props.isOpen &&
                <InfoWindow onCloseClick={this.props.onToggleOpen}>
                    <h1>{this.props.venue[0].name}</h1> {/* Added this here so we could grab the name of the first venue in the list*/}
                </InfoWindow>}
            </Marker>
        )
    }
}


export default MarkerInfoWindow