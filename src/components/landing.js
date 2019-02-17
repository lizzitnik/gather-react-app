import React from 'react';

import SignUp from './sign-up'
import Banner from './banner'
import '../styles/landing.css'

export default class Landing extends React.Component {
  render() {
    return (
      <div className='landing-page'>
        <Banner />
        <div className='top'>

          <div className='left'>
            <div className='pitch'>
              <h2>Those who GATHER together, Stay together.</h2>
              <p>Travelling alone? Wish there was a better way to fill those lonely hours after the sun goes down? Well now there is!</p>
            </div>
          </div>

          <div className='right'>
            <div className='sign-up'>
              <SignUp />
            </div>
          </div>
        </div>

        <div className='bottom'>

          <div className='how-it-works'>
            <h2>HOW IT WORKS</h2>
            <div className='steps-container'>

              <div className='step-1'>
                <h2>–1–</h2>
                <h2>SEARCH</h2>
                <p>Search by location and peruse through the various gatherings that pop up until you find one you like</p>
              </div>

              <div className='step-2'>
                <h2>–2–</h2>
                <h2>CREATE</h2>
                <p>Nothing you like? Create your own gathering and let people come to you</p>
              </div>

              <div className='step-3'>
                <h2>–3–</h2>
                <h2>GATHER</h2>
                <p>Now all you have to do is show up, meet some new people, and have fun</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
