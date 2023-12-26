import React from 'react'
import './Footer.css'
import { Link } from 'react-scroll';
import logo from "../../assets/images/logo.png";

const Footer = () => {
    return (
        <div className='footer_con'>
            <div className="c">
                <div className="footer_wrap">
                    <div className="col_2 col">
                        <div className="log">
                            <Link to="home" smooth={true} offset={-75} duration={500} >
                                <img src={logo} />
                            </Link>
                        </div>
                    </div>
                    <div className="col_2 col">
                        <ul className='foot_list'>
                            <Link to="home" smooth={true} offset={-75} duration={500} >
                                <li className='col'>Home</li>
                            </Link>
                            <Link to="about" smooth={true} offset={-75} duration={500} >
                                <li className='col'>About</li>
                            </Link>
                            <Link to="home" smooth={true} offset={-75} duration={500} >
                                <li className='col'>Services</li>
                            </Link>
                            <Link to="home" smooth={true} offset={-75} duration={500} >
                                <li className='col'>Contact</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer