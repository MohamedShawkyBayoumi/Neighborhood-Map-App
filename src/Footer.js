import React from 'react'

class Footer extends React.Component {
    render(){
        return (
            <footer>
                <div className='footer-container'>
                    <div className='f-pyramids'></div>
                    <div className='footer-text'>
                        <span className='copy-rights'>
                        Powered and Designed By &copy; <a target='_blank' href='https://www.linkedin.com/in/mohamedshawkybayoumi/'>Mohamed Shawky</a>
                        </span>
                    </div>
                    <div className='statue'></div>
                </div>
                
            </footer>
        )
    }
}


export default Footer