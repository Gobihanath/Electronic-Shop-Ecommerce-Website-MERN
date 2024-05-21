import React from 'react'
import './Footer.css'
import {assets} from '../../Assets1/assets'

const Footer = () => {
  return (
    <div className='footer' id="footer">
       <div className='footer-content'>
            <div className='footer-content-left'>
                <img className='logo1' src={assets.logo1} alt=''/>
                <p>Discover the latest in electronic gadgets and accessories. From smartphones to home appliances, we have everything you need to stay connected and make life easier.Featured Products</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt=''/>
                    <img src={assets.twitter_icon} alt=''/>
                    <img src={assets.linkedin_icon} alt=''/>
                </div>

            </div>

            <div className='footer-content-center'>
                <h2>Explore</h2>
                <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>

                </ul>
            </div>

            <div className='footer-content-right'>
                <h2>Get In Touch</h2>
                <ul>
                    <li>+94 770070007</li>
                    <li>contact@sparklingelectro.com</li>
                </ul>
            </div>

       </div>
       <hr/>
       <p className='footer-copyright'>
        Copyright 2024 © 2024 Sparkling Electronics pvt ltd. All Rights Reserved.
       </p>


    </div>
  )
}

export default Footer