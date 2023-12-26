import React from 'react'
import { MdLocationPin } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { Element } from 'react-scroll'

import './Contact.css';

const Contact = () => {
    return (
        <Element name="contact" className='contact_con'>
            <div className="c">
                <div className="b_tit">
                    <h2 data-aos="fade-down">GET IN TOUCH</h2>
                    <div className="sec_con">
                        <div className="add_con">
                            <div className="row">
                                <div className="col_3 col" data-aos="fade-left">
                                    <div className="icon">
                                        <MdLocationPin />
                                    </div>
                                    <div className="ad_wrap">
                                        <div className="ad_title">ADDRESS</div>
                                        <p>4/46A, Main Road </p>
                                        <p>Mettukundu - 626 004 </p>
                                    </div>
                                </div>
                                <div className="col_3 col" data-aos="fade-up">
                                    <div className="icon">
                                        <BsTelephoneFill />
                                    </div>
                                    <div className="ad_wrap">
                                        <div className="ad_title">PHONE</div>
                                        <p>9442578628</p>
                                        <p>8124947495</p>
                                            {/* <p></p>
                                            <p>9442578628</p> */}
                                    </div>
                                </div>
                                <div className="col_3 col" data-aos="fade-right">
                                    <div className="icon">
                                        <MdEmail />
                                    </div>
                                    <div className="ad_wrap">
                                        <div className="ad_title">EMAIL</div>
                                        <p>friendseworld@gmail.com </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Contact