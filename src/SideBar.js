import React from 'react'
//import * as FoursquareAPI from './FoursquareAPI'


class SideBar extends React.Component {


    render (){
        

        /*
        const markerPosition = {lat: this.props.venue.location.lat, lng: this.props.venue.location.lng}
        console.log(markerPosition)
        */
       

        return (
            <aside id='aside'>
                <div className='pharaoh'>
                    <div className='pharaoh-img'></div>
                </div>
                <div className='close'>
                    <button role='button' className="closebtn" onClick={this.props.closeNav}>&times;</button>
                </div>
                <div className='filter-section'>
                
                    <input
                        type='text'
                        placeholder='Search'
                        role="textbox" 
                        aria-label = "Enter the historical place name"
                        onChange={(event) => this.props.searchQuery(event.target.value)}
                        />
                
                </div>
                <div className='list'>
                    <ul className='list-links' role='list'>
                    
                    {this.props.showingVenueName.map(v =>
                        <li key={v.id} role='list' tabIndex='0'><a onClick={() => this.props.onToggleOpen(v.id)}>{v.name}</a></li>
                    )}

                    </ul>
                </div>
            </aside>
        )
    }
}

export default SideBar