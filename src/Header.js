import React from 'react'

const Header = ({openNav}) => {
    return (
        <header tabIndex='0'>
            <nav className='hamburger-icon'>
                {/*<span className='openbtn' onClick={openNav} >&#9776;</span>*/}
                <button tabIndex='0' className='key-icon' onClick={openNav} role='button' aria-label='navigation button'></button>
            </nav>
            <div className='head-right-container'>
                
                <div className='head-text'>
                    <h2>Egypt Ancient Locations</h2>
                    <div className='egypt-pin'></div>
                </div>
            </div>
        </header>
    );
}

export default Header;