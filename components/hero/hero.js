import React from "react";
import NavLink from 'next/link'
import himg from '/public/images/slider/right-img.png'
import { Link } from 'react-scroll'
import Image from "next/image";
import hbgimg from '/public/images/hero_bg.svg'

const Hero =() => {
    return (
        <section className="tp-hero-section-1">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-7 col-lg-7">
                        <div className="tp-hero-section-text">
                            <div className="tp-hero-title">
                                <h2>TheDevDesigner</h2>
                            </div>
                            <div className="tp-hero-sub">
                                <p>Debargha Bandyopadhyay - Designer and Developer</p>
                            </div>
                            <div className="btns">
                                <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} offset={-95} className="theme-btn">Contact Me</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-vec">
                <div className="right-img">
                    <Image src={himg} alt=""/>
                </div>
            </div>
            <div className="social-link">
                <ul>
                    <li><NavLink href="https://www.linkedin.com/in/debarghabandyopadhyayofficial/" target="blank">LinkedIn</NavLink></li>
                    <li><NavLink href="https://www.behance.net/debarghaofficial/" target="blank">Behance</NavLink></li>
                    <li><NavLink href="https://www.instagram.com/spore_nomore/" target="blank">Instagram</NavLink></li>
                    
                </ul>
            </div>
            <div className="hero-bg">
                    <Image src={hbgimg} alt=""/>
            </div>
        </section>
    )
}

export default Hero;