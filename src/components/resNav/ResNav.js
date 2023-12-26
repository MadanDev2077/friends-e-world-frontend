import React, { useState } from 'react'
import { Link } from 'react-scroll'
import logo from "../../assets/images/logo.png"
import "./ResNav.css";

const ResNav = (props) => {
    const [close, setClose] = useState(true);

    // const handleClick = () => {
    //     setClose(false);
    //     props.setOpen(false);
    // }
    // if (props.open) {
    //     setClose(true);
    // }
    return (
        <div className={"nav_res " + (props.open && close == true ? ' show' : '')} >
            <div className="log">
                <Link to="home" smooth={true} offset={-75} duration={500} >
                    <img src={logo} />
                </Link>
            </div>
            <ul>
                <Link to="home" smooth={true} offset={-75} duration={500} onClick={props.fun}>
                    <li>Home</li>
                </Link>
                <Link to="about" smooth={true} offset={-75} duration={500} onClick={props.fun}>
                    <li>About Us</li>
                </Link>
                <Link to="services" smooth={true} offset={-75} duration={500} onClick={props.fun}>
                    <li>Services</li>
                </Link>
                <Link to="contact" smooth={true} offset={-75} duration={500} onClick={props.fun}>
                    <li>Contact</li>
                </Link>
            </ul>
        </div>
    )
}

export default ResNav