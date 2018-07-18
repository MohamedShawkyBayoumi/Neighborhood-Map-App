import React from 'react'

class SideBar extends React.Component {
    render (){
        return (
            <aside id='aside'>
                <div className='close'>
                    <a href="javascript:void(0)" className="closebtn" onClick={this.props.closeNav}>&times;</a>
                </div>
                <div className='filter-section'>
                    <input type='text' placeholder='Search' />
                    <button>Filter</button>
                </div>
                <div className='list'>
                    <ul className='list-links'>
                        <li><a href='#'>Pyramids</a></li>
                        <li><a href='#'>Down Town</a></li>
                        <li><a href='#'>Egyptian Museum</a></li>
                        <li><a href='#'>Cairo Tower</a></li>
                        <li><a href='#'>ElKarnak Temple</a></li>
                        <li><a href='#'>Sharm El-Sheikh</a></li>
                        <li><a href='#'>Hurghada</a></li>
                    </ul>
                </div>
            </aside>
        )
    }
}

export default SideBar