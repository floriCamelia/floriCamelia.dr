import React from 'react';
// Components
import Hero from "../organisms/Hero/Hero";
import Colorblock from "../organisms/Colorblock/Colorblock";
// Data
import dataAboutUs from '../data/romanian/data-about-us';
import HeroImg from '../assets/img/aboutHero.jpg'
import BlockImage from '../assets/img/aboutCEO.jpg'

export default class AboutUs extends React.Component {
  render() {

    return (
      <section className='about-us-page'>
        <Hero imgSrc={HeroImg} isNarrow='true' title="Despre Noi"/>
        <Colorblock intro={dataAboutUs.intro} description={dataAboutUs.description} imgSrc={BlockImage}/>
      </section>
    )
  }
}
