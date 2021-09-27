import React from 'react';
// Components
import Hero from "../organisms/Hero/Hero";
// Data
import dataHomePage from "../data/data-homepage";
import VideoBLock from "../atoms/VideoBlock/VideoBlock";
import HeroImg from '../assets/img/hero.jpg';
import Colorblock from '../organisms/Colorblock/Colorblock';
import FeaturedThisWeek from '../assets/img/featured.jpg';

export default class HomePage extends React.Component {
  render() {
    return (
      <section className='homepage'>
        <Hero imgSrc={HeroImg} title={dataHomePage.title} description={dataHomePage.description} />
        <VideoBLock isLarge='true' videoSrc={dataHomePage.video} title={dataHomePage.videoTitle}/>
        <Colorblock imgLeft='true' title={dataHomePage.featuredTitle} description={dataHomePage.featuredDescription} telCTA={dataHomePage.cta} imgSrc={FeaturedThisWeek} />
      </section>
    )
  }
}

