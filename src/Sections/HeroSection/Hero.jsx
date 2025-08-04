import React from 'react';
import HeroImgDesktop from './Heroimg2.webp'; 
import HeroImgMobile from './Heroimg1.webp';
import classes from './HeroSty.module.css';

const Hero = () => {
  return (
    <div className={classes.HeroContainer}>
      <picture>
        <source srcSet={HeroImgMobile} media="(max-width: 768px)" />
        <img src={HeroImgDesktop} alt="Hero" className={classes.HeroImage} />
      </picture>
    </div>
  );
};

export default Hero;
