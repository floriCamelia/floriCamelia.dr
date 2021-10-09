import React from 'react';
// Components
import Hero from "../organisms/Hero/Hero";
import Card from "../organisms/Card/Card";
import Grid from "../organisms/Grid/Grid";
import Slider from "../organisms/CardSlider/CardSlider";
// Data
import HeroImg from '../assets/img/serviciiHero.jpg';

export default class Services extends React.Component {
  render() {
    const {data} = this.props;

    return (
      <section className='services-page'>
        <Hero imgSrc={HeroImg} isNarrow='true' title={data.heroTitle}/>
        <Grid isThreeCol='true'>
          {data.cards && data.cards.map((card, index) => (
            <Card key={index} imgSrc={card.imgSrc} imgAlt={card.imgAlt} title={card.title}
                  description={card.description} cta={card.cta}/>
          ))}
        </Grid>
        <Slider sliders={data.slider.cards} title={data.slider.title}/>
      </section>
    )
  }
}
