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
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


class App extends Component {

  state = {
    venue: [],
    searchedVenues: '',
    placeToShow: '',
    isOpen: false,
    error: false
  }

/*
  gm_authFailure(){
    window.alert("Google Maps error!")
  }
*/

  componentDidMount(){
    FoursquareAPI.getVenue()
    .then( venue => {
      this.setState({ venue })
    })
    .catch(err => {
      //window.gm_authFailure = this.gm_authFailure;
      alert("failed while fetching")
      this.setState({ error: true }); // Change some state erro to true to indicate that there was an error here
    })
  }
  // Then in your render, if error state is true, show a modal or popup that tells the user that occurred an error with Foursquare API

  searchQuery = (query) => {
    this.setState({ searchedVenues: query })
  }

  openNav() {
    document.getElementById("aside").style.width = "350px";
    //document.getElementById("right-section").style.marginLeft = "300px";
    document.getElementById('aside').focus();
    
  }

 closeNav() {
    document.getElementById("aside").style.width = "0";
    //document.getElementById("right-section").style.marginLeft= "0";
    document.getElementById('map-section').focus();
  }

  onToggleOpen = (id) => {
    this.setState({
      placeToShow: id,
      isOpen: true
    })
  }

  render() {

    let showingVenueName;

    if(this.state.searchedVenues){
      const match = new RegExp(escapeRegExp(this.state.searchedVenues), 'i')
      showingVenueName = this.state.venue.filter(venue => match.test(venue.name))
    } else {
      showingVenueName = this.state.venue
    }

    showingVenueName.sort(sortBy('name'))
    
    return (
      <div className="App">
        <SideBar
          showingVenueName={showingVenueName}
          onToggleOpen={this.onToggleOpen}
          closeNav={this.closeNav}
          venue={this.state.venue}
          searchedVenues={this.state.searchedVenues}
          searchQuery={this.searchQuery}
        />
        
        <main className='main-page'>  
          <div className='right-section' id='right-section'>
            <Header openNav={this.openNav}/>
            <section id='map-section' tabIndex='0'>

              <Map
                v={showingVenueName}
                onToggleOpen={this.onToggleOpen}
                venue={showingVenueName}
                placeToShow={this.state.placeToShow}
                isOpen={this.state.isOpen}
                containerElement={<div className='containerElement'/>}
                mapElement={<div className='mapElement' />}
                loadingElement={<div className='loadingElement' />}
                googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyDWEjkT8J2pKroWpQiRYOgXgo1Pxemx5XY&v=3.exp&libraries=geometry,drawing,places'
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

