import React from 'react'
import './Hero.css';
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter';
const Hero = () => {
    const transition={type:"spring",duration:3}
        const mobile =window.innerWidth<=786?true :false;

    return(
        <div className="hero">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                {/* The best Add*/}
                <div className="the-best-ad">
                    <motion.div
                    initial={{left:mobile? "165px":'230px'}}
                    whileInView={{left:'8px'}}
                    transition={{...transition,type:'tween'}}
                    ></motion.div>
                    <span>The Best Fitness Club In the Town</span>
                </div>
                {/* The best add Close*/}
                <div className="hero-text">
                    <div><span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>
                {/* Figures*/}
                <div className="figures">
                    <div><span><NumberCounter end={140} start={100} delay='4' preFix="+"/></span><span>EXPERT COACHES</span></div>
                    <div><span><NumberCounter end={978} start={500} delay='4' preFix="+"/></span><span>MEMBERS JOINED</span></div>
                    <div><span><NumberCounter end={50} start={0} delay='4' preFix="+"/></span><span>FITNESS PROGRAMS</span></div>
                </div>
                {/* Hero Buttons*/}
                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>

            <div className="right-h">
                <button className='btn'>Join Now</button>
                <motion.div
                transition={transition}
                initial={{right:"-1rem"}}
                    whileInView={{right:"4rem"}}
                className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span><span>116 bpm</span>
                </motion.div>
                <img src={hero_image} className='hero-image' alt="" />
                <motion.img
                  transition={transition}
                initial={{right:"11rem"}}
                    whileInView={{right:"20rem"}}
                src={hero_image_back} className="hero-image-back" alt="" />
                <motion.div
                  transition={transition}
                  initial={{right:"37rem"}}
                      whileInView={{right:"28rem"}}
                className="calories">
                    <img src={Calories} alt="" />
                    <div>

                        <span>Calories burned</span><span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero