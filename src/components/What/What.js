import React from 'react'
import './What.css';

const What = (props) => {
    return (
        <div data-aos={props.ani} className='about_con'>
            <div className="c">
                <div className="b_tit">
                    <h2>What do we do ?</h2>
                </div>
                <div className="sec_con">
                    <p>We offer a wide range of plans and services to 
                    meet the needs of our diverse customer base, including voice, text, and data plans for both cell phones and landlines. </p>
                    <p>We offer E services like Adhar correction , Smart card service and Etc.</p>
                </div>
            </div>
        </div>
    )
}

export default What