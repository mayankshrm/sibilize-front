import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-section-padding sb_footer">
        <div className='footer-links'>
            <div className='footer-links-item1'>
                <h3>SIBILIZE</h3>
            </div>
            <div className='footer-links-item'>
                <a href='/about'>
                    <p>About Us</p>
                </a>
            </div>
            <div className='footer-links-item'>
                <a href='/Team'>
                    <p>Team</p>
                </a>
            </div>
            <div className='footer-links-item'>
                <a href='/tc'>
                    <p>T&C</p>
                </a>
            </div>
            <div className='footer-links-item'>
                <a href='/contactus'>
                    <p>Contact Us</p>
                </a>
            </div>
            <div className='footer-links-item'>
                <div className="social-media">
                    <div className="social-media-items click_me">
                    <i className="fa-brands fa-facebook"></i></div>
                    <div className="social-media-items click_me"> <i className="fa-brands fa-linkedin"></i></div>
                    <div className="social-media-items click_me"> <i className="fa-brands fa-instagram"></i></div>
                    <div className="social-media-items click_me"><i className="fa-brands fa-twitter "></i></div>
                </div>
            </div>
            
        </div>
        
    
        </div>
      
    </div>
  )
}

export default Footer
