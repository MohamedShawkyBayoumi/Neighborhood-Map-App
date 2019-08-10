import React from 'react'
//import * as FoursquareAPI from './FoursquareAPI'

class SideBar extends React.Component {
    render (){
        const {
            closeNav,
            searchQuery,
            showingVenueName,
            onToggleOpen
        } = this.props;
        /*
        const markerPosition = {lat: venue.location.lat, lng: venue.location.lng}
        console.log(markerPosition)
        */
        return (
            <aside id='aside' tabIndex='0'>
                <nav>
                    <div className='pharaoh'>
                        <div className='pharaoh-img'></div>
                    </div>
                    <nav className='close'>
                        <button role='button' aria-label='close list filter' className="closebtn" onClick={closeNav}>&times;</button>
                    </nav>
                    <div className='filter-section'>
                        <input
                            type='text'
                            placeholder='Search'
                            role="textbox" 
                            aria-label = "Enter the Ancient place name"
                            onChange={(event) => searchQuery(event.target.value)}
                        />
                    </div>
                    <div className='list'>
                        <ul className='list-links' role='list'>
                        {showingVenueName.map(v =>
                            <li
                            key={v.id}
                            tabIndex='0'><a onClick={() => onToggleOpen(v.id)} >{v.name}</a></li>
                        )}
                        </ul>
                    </div>
                </nav>
            </aside>
        )
    }
}

export default SideBar