import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import SideBar from './SideBar'
import Map from './Map'
import Footer from './Footer'
// api key = AIzaSyDxLUeezrEtn52a8Jt4JNrxeLd69WVyHBQ


class App extends Component {

  state = {
    Markers: [
      {
        placeName: 'El-Karnak',
        position: {lat: 25.7188346, lng: 32.6550816}
      },
      {
        placeName: 'Luxor Temple',
        position: {lat: 25.699502, lng: 32.6368622}
      },
      {
        placeName: 'Mortuary Temple of Hatshepsut',
        position: {lat: 25.7379736, lng: 32.6063226}
      },
      {
        placeName: 'Valley of the Kings',
        position: {lat: 25.74258, lng: 32.5972163}
      },
      {
        placeName: 'Temple of Isis',
        position: {lat: 24.0255933, lng: 32.8819195}
      },
      {
        placeName: 'Abu Simbel Temples',
        position: {lat: 22.3372319, lng: 31.6236103}
      }
    ]
  }

  openNav() {
    document.getElementById("aside").style.width = "300px";
    document.getElementById("right-section").style.marginLeft = "300px";
    
  }

 closeNav() {
    document.getElementById("aside").style.width = "0";
    document.getElementById("right-section").style.marginLeft= "0";
  }

  render() {
    return (
      <div className="App">

        <SideBar closeNav={this.closeNav}/>
        
        <main className='main-page'>
          
          <div className='right-section' id='right-section'>
            <Header openNav={this.openNav}/>
            <section>
              <Map
                isMarkerShown
                containerElement={<div style={{height: '100%'}}/>}
                mapElement={<div style={{height: '100%'}}/>}
                loadingElement={<div style={{height: '100%'}}/>}
                googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyDxLUeezrEtn52a8Jt4JNrxeLd69WVyHBQ&v=3.exp&libraries=geometry,drawing,places'
              />
            </section>
            <Footer/>
          </div>
        </main>
      </div>
    );
  }
}

export default App;

