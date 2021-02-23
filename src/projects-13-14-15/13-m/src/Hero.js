//
//

import React from 'react';
import phoneImg from './images/phone.svg';

import { useGlabalContext } from './context';

const Hero = () => {
  // eslint-disable-next-line no-unused-vars
  const { closeSubmenu } = useGlabalContext();

  return (
    <section className='hero'>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes. From startups to Fortune-500s
            Stripe's software and API's to account payments, send payouts, and
            manage their businsses online
          </p>
          <button className='btn'>Start Now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='phone' />
        </article>
      </div>
    </section>
  );
};

export default Hero;
