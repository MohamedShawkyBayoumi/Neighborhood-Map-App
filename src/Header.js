import React from 'react'



class Header extends React.Component {


    render(){
        return (
            <header>
                <div className='hamburger-icon'>
                    <span className='openbtn' onClick={this.props.openNav} >&#9776;</span>
                </div>
            </header>
        )
    }
}


export default Header