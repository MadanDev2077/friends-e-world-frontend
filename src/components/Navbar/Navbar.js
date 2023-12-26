import React, { useState } from 'react'
import './Navbar.css';
import { Link } from 'react-scroll'
import logo from "../../assets/images/logo.png"
import { MdMenu } from 'react-icons/md';
import ResNav from '../resNav/ResNav';
import { AiOutlineClose } from 'react-icons/ai';


const Navbar = (props) => {
    const [open, setOPen] = useState(false);

    const handleClick = () => {
        setOPen(!open);
    }

    return (
        <div className='navbar_container'>
            <ResNav open={open} fun={handleClick} />
            <div className="c">
                <div className="nav_inner">
                    <div className="col_2 col">
                        <div className="log">
                            <Link to="home" smooth={true} offset={-75} duration={500} >
                                <img src={logo} />
                            </Link>
                        </div>
                    </div>
                    <div className="col_2 col t_right">
                        <ul className='col'>
                            <Link to="home" smooth={true} offset={-75} duration={500} >
                                <li>Home</li>
                            </Link>
                            <Link to="about" smooth={true} offset={-75} duration={500} >
                                <li>About Us</li>
                            </Link>
                            <Link to="services" smooth={true} offset={-75} duration={500} >
                                <li>Services</li>
                            </Link>
                            <Link to="contact" smooth={true} offset={-75} duration={500} >
                                <li>Contact</li>
                            </Link>
                        </ul>
                        <div className="bur_icon">
                            <a onClick={handleClick}>
                                {open ? <AiOutlineClose /> : <  MdMenu />}

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar