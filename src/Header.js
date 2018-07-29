import React from 'react'



class Header extends React.Component {


    render(){
        return (
            <header>
                <nav className='hamburger-icon'>
                    {/*<span className='openbtn' onClick={this.props.openNav} >&#9776;</span>*/}
                    <button tabIndex='0' className='key-icon' onClick={this.props.openNav} role='button' aria-label='navigation button'></button>
                </nav>
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