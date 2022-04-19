import React from 'react'
import './About.css'
import QR from './images/probably.jfif'
import Idea from './images/idea2.png'
import Loco from './images/loco2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faStar } from '@fortawesome/fontawesome-free-solid'

function About() {
  return (
    <div className='about-school'>
        <div className='about-school-top'></div>
        <div className='about-school-hero'>
            <div className='about-school-hero-left'>
                <div className='about-school-hero-left-one'>
                    <div className='about-school-hero-left-one-top'>
                        <h4><FontAwesomeIcon icon={faSave} /></h4>
                    </div>
                    <div className='about-school-hero-left-one-bottom'>
                        <h4>Store Data</h4>
                    </div>
                </div>
                <div className='about-school-hero-left-two'>
                    <div className='about-school-hero-left-two-top'>
                        <img src={QR} alt="" />
                    </div>
                    <div className='about-school-hero-left-two-bottom'>
                        <h4>Generate QR Code</h4>
                    </div>
                </div>
                <div className='about-school-hero-left-three'>
                    <div className='about-school-hero-left-three-top'>
                        <img src={Idea} alt="" />
                    </div>
                    <div className='about-school-hero-left-three-bottom'>
                        <h4>Scan QR Code</h4>
                    </div>
                </div>
                <div className='about-school-hero-left-four'>
                    <div className='about-school-hero-left-four-top'>
                        <img src={Loco} alt="" />
                    </div>
                    <div className='about-school-hero-left-four-bottom'>
                        <h4>Trigger SMS Alert</h4>
                    </div>
                </div>
            </div>
            <div className='about-school-hero-right'>
                <h1 className='about-right-now'>App that increases <span>Accountability to Child's Safety</span> as they commute to school</h1>
                <p className='about-now-p'>This app helps to track the location of a child as they commute to school. Parents often face difficulties in getting hold of the whereabouts of their children when they are not in sight. This app takes the records of the children and turns it into a qr code which the child carries on an id plate. The QR Code is scanned when the child arrives at school and this triggers an alert sms to be sent to the child's parent assuring him or her that the child is in school.</p>
                <h2 className='try-it'>It is Easy! Try it right now!</h2>
            </div>
        </div>
        <div className='about-school-after-hero'>
            <div className='about-school-after-hero-top'>
                <h2>Top reasons why you should try C-KER</h2>
            </div>
            <div className='about-school-after-hero-bottom'>
                <div className='about-school-after-hero-bottom-left'>
                    <ul>
                        <li><span><FontAwesomeIcon icon={faStar} /></span><h3>It is fast</h3></li>
                        <li><span><FontAwesomeIcon icon={faStar} /></span><h3>It complies with those school policies that do not allow school children to carry phones to school</h3></li>
                        <li><span><FontAwesomeIcon icon={faStar} /></span><h3>Compatible with Apple phones</h3></li>
                        <li><span><FontAwesomeIcon icon={faStar} /></span><h3>Compatible with android phones</h3></li>
                        <li><span><FontAwesomeIcon icon={faStar} /></span><h3>Easy access anytime you log into our websites</h3></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
