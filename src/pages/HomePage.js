import React from 'react';
// Components
import Hero from "../organisms/Hero/Hero";
// Data
import VideoBLock from "../atoms/VideoBlock/VideoBlock";
import HeroImg from '../assets/img/hero.jpg';
import Colorblock from '../organisms/Colorblock/Colorblock';
import FeaturedThisWeek from '../assets/img/featured.jpg';

export default class HomePage extends React.Component {
  render() {
    const {data, videoTitle, video} = this.props;

    return (
      <section className='homepage'>
        <Hero imgSrc={HeroImg} title={data.title} description={data.description} />
        <VideoBLock isLarge='true' videoSrc={video} title={videoTitle}/>
        <Colorblock imgLeft='true' title={data.featuredTitle} description={data.featuredDescription} telCTA={data.cta} imgSrc={FeaturedThisWeek} />
      </section>
    )
  }
}

HomePage.defaultProps = {
  video: 'https://www.youtube.com/embed/VBCvBmSsY4M',
  videoTitle: 'FloriCamelia - Drochia, Moldova',
};

