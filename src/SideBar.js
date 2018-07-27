import React from 'react'
//import * as FoursquareAPI from './FoursquareAPI'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class SideBar extends React.Component {


    render (){
        let showingVenueName;
        if(this.props.searchedVenues){
            const match = new RegExp(escapeRegExp(this.props.searchedVenues), 'i')
            showingVenueName = this.props.venue.filter(venue => match.test(venue.name))
        } else {
            showingVenueName = this.props.venue
        }

        showingVenueName.sort(sortBy('name'))

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
                    <a  className="closebtn" onClick={this.props.closeNav}>&times;</a>
                </div>
                <div className='filter-section'>
                    <input
                        type='text'
                        placeholder='Search'
                        onChange={(event) => this.props.searchQuery(event.target.value)}
                        />
                    <button></button>
                </div>
                <div className='list'>
                    <ul className='list-links'>
                    
                    {showingVenueName.map(v =>
                        <li key={v.id} ><a onClick={() => this.props.onToggleOpen(v.id)}>{v.name}</a></li>
                    )}

                    </ul>
                </div>
            </aside>
        )
    }
}

export default SideBar