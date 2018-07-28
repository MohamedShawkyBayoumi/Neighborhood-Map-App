import React from 'react'



class Header extends React.Component {


    render(){
        return (
            <header>
                <div className='hamburger-icon'>
                    {/*<span className='openbtn' onClick={this.props.openNav} >&#9776;</span>*/}
                    <button tabIndex='0' className='key-icon' onClick={this.props.openNav}></button>
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