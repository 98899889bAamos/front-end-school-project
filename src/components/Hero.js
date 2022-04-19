import React, { Component } from 'react'
import './Hero.css'
import HeroImage from './images/school.png'

export class Hero extends Component {
  render() {
    return (
      <div>
      <div className="main" id="home">
      <div className="main__container">
        <div className="main__content">
          <h1>
            Join the
            <span className="text-highlight"> Movement and Ensure </span> Child Safety
          </h1>
          <p>Discover our work</p>
          <button className="main__btn"><a href="https://amosbilly.co.ke">Start Today</a></button>
        </div>
        <div className="main__img--container">
          <img src={HeroImage} alt="" id="main__img" className="reveal" />
        </div>
      </div>
    </div>
      </div>
    )
  }
}

export default Hero
