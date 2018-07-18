import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import SideBar from './SideBar'
import Map from './Map'
import Footer from './Footer'
// api key = AIzaSyDxLUeezrEtn52a8Jt4JNrxeLd69WVyHBQ


class App extends Component {

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

