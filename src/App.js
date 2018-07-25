import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import SideBar from './SideBar'
import Map from './Map'
import Footer from './Footer'
// api key = AIzaSyDxLUeezrEtn52a8Jt4JNrxeLd69WVyHBQ
/*
Foursquare API
Client ID
GYQCNBNLZLYOSZVSJ0WZFIWBPFVYKXLPDIFGDONAQMRRQW2P
Client Secret
C0FHXCOXYCJFEDMQRK0JLRTCZ15TFORBVWUIOGS1VNVQYG45
*/
/*
https://api.foursquare.com/v2/venues/search?ll=25.694937,32.6244474&client_id=GYQCNBNLZLYOSZVSJ0WZFIWBPFVYKXLPDIFGDONAQMRRQW2P&client_secret=C0FHXCOXYCJFEDMQRK0JLRTCZ15TFORBVWUIOGS1VNVQYG45&v=20180719
*/
import * as FoursquareAPI from './FoursquareAPI'



class App extends Component {

  state = {
    venue: [],
    searchedVenues: ''
  }


  componentDidMount(){
    FoursquareAPI.getVenue().then( venue => {
      this.setState({ venue })
    })
    
  }

  
  searchQuery = (query) => {
    this.setState({ searchedVenues: query })
    
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
      
        <SideBar
          closeNav={this.closeNav}
          venue={this.state.venue}
          searchedVenues={this.state.searchedVenues}
          searchQuery={this.searchQuery}
          
          />
        
        <main className='main-page'>
          
          <div className='right-section' id='right-section'>
            <Header openNav={this.openNav}/>
            <section>

              <Map
                venue={this.state.venue}
                
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

