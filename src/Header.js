import React from 'react'



class Header extends React.Component {


    render(){
        return (
            <header>
                <div className='hamburger-icon'>
                    {/*<span className='openbtn' onClick={this.props.openNav} >&#9776;</span>*/}
                    <span className='key-icon' onClick={this.props.openNav}></span>
                </div>
                <div className='head-right-container'>
                    
                    <div className='head-text'>
                        <h2>Egypt Ancient Locations</h2>
                        <div className='egypt-pin'></div>
                    </div>
                </div>
            </header>
        )
    }
}


export default Header