import React, { useEffect } from 'react'
import './About.css';
import { Element } from 'react-scroll'

const About = (props) => {

    return (
        <Element data-aos={props.ani}  name="about" className="about_con">
            <div className="c">
                <div className="b_tit">
                    <h2>About Us</h2>
                </div>
                <div className="sec_con">
                    <p>Welcome to <b>Friends E-World and Mobiles.</b> We have been doing our E-services and mobile Services  since 2017.</p>
                    <p>Our team is dedicated to providing top-quality service and support to all of our customers. We have a team of experienced professionals 
                    who are available to assist you with any questions or issues you may have.</p>
                </div>
            </div>
        </Element>
    )
}

export default About