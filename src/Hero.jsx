import React from 'react';
import phoneImg from './assets/phone.svg';
import { useGlobalContext } from './context';

const Hero = () => {
	const { closeSubmenu } = useGlobalContext();
	return (
		<section className='hero' onMouseOver={closeSubmenu}>
			<div className='w-[90vw] max-w-[1770px] grid items-center md:grid-cols-[2fr_1fr]'>
				<article className=''>
					<h1 className='normal-case max-w-[500px] mb-8 md:font-bold'>Payments infrastructure for the internet</h1>
					<p className='max-w-[35em] mb-8 leading-[1.8]'>
						Millions of companies of all sizes-from startups to Fortune 500s-use
            Stripe's software and APIs to accept payments, sent payouts, and
            manage their businesses online.
					</p>
          <button className='btn'>
            Start now
          </button>
				</article>
				<article className='hidden md:block md:justify-self-center'>
					<img src={phoneImg} alt='phone' />
				</article>
			</div>
		</section>
	);
};

export default Hero;
// Hero
// hero-center
// hero-info
// hero-images