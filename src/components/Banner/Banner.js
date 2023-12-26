import React, { useEffect, useState } from 'react'
import banner from '../../assets/images/banner.jpg';
import Navbar from '../Navbar/Navbar';
import './Banner.css';
import sim from '../../assets/images/sim.jpg';
import { Element } from 'react-scroll'

const Banner = () => {
    const [banners, setBanners] = useState(banner);

    // useEffect = () => {
    //     if (window.outerWidth <= "500") {
    //         setBanners(sim);
    //     }
    // }
    return (
        <Element name="home" className="banner_container" style={{ background: `url(${banners})` }}>
            {/* <img src={banner} alt="" /> */}
            <div className="ban_tit">Friends <span style={{ color: "#ffff00" }}>E-World</span> & <span style={{ color: "#d43131" }}>Mobiles</span></div>
        </Element>
    )
}

export default Banner