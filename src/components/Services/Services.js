import React from 'react'
import Carousal from 'react-elastic-carousel';
import Card from './Card';
import './Services.css';
import { Element } from 'react-scroll';
import adhar from "../../assets/images/adhar.jpg";
import smart from "../../assets/images/smart.jpg";
import cast from "../../assets/images/cast.jpg";
import grad from "../../assets/images/grad.jpg";
import wid from "../../assets/images/wid.jpg";
import former from "../../assets/images/for.jpg";
import lam from "../../assets/images/lam.jpg";
import xer from "../../assets/images/xer.jpg";
import recharge from "../../assets/images/recharge.jpg";
import sim from "../../assets/images/sim.jpg";
import bus from "../../assets/images/bus.jpg";
import fssai from "../../assets/images/fssai.jpg";
import vill from "../../assets/images/vill.jpg";
import pension from "../../assets/images/pen.jpg";
import crop from "../../assets/images/crop.jpg";
import online from "../../assets/images/inline.jpg";
import veh from "../../assets/images/two.jpg";
import tneb from "../../assets/images/tneb.jpg";
import tic from "../../assets/images/tic.jpg";
import pass from "../../assets/images/pass.jpg";
import pan from "../../assets/images/pan.jpg";

const Services = (props) => {
    const settings = {
        speed: 500
    };
    return (
        <Element name="services" className="services_con">
            <div className="c" data-aos={props.ani}>
                <div className="b_tit">
                    <h2>Services</h2>
                </div>
                <div className="sec_con">
                    <Carousal>
                        <Card img={adhar} tit="Adhard Card Correction"/>
                        <Card img={smart} tit="Smart Card Service"/>
                        <Card img={cast} tit="Cast, Income and Native Certificate Service"/>
                        <Card img={grad} tit="First Graduate Certificate"/>
                        <Card img={wid} tit="Legal Heir and Widow Certificate"/>
                        <Card img={former} tit="Former Certificate"/>
                        <Card img={lam} tit="Lamination , Color Xerox and  Print Out"/>
                        <Card img={pan} tit="PAN Card apply"/>
                        <Card img={pass} tit="Passport Services"/>
                        <Card img={tic} tit="Bus , Train and Flight tickets pre booking"/>
                        <Card img={tneb} tit="EB Bill Service"/>
                        <Card img={veh} tit="Two Wheelar Insurance"/>
                        <Card img={online} tit="Online Exam apply"/>
                        <Card img={crop} tit="Crop Insurance"/>
                        <Card img={pension} tit="Pension Life Certificate"/>
                        <Card img={vill} tit="Villangam Certificate"/>
                        <Card img={fssai} tit="FSSAI Certificate Renewal"/>
                        <Card img={bus} tit="MSME Small Business Certificate"/>
                        <Card img={sim} tit="Jio, VI and Airtel Simcard Available"/>
                        <Card img={recharge} tit="Mobile , DTH and FASTAG Recharge Available"/>

                    </Carousal>
                </div>
            </div>
        </Element>
    )
}

export default Services