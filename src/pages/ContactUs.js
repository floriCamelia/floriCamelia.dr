import React from 'react';
// Components
import Hero from "../organisms/Hero/Hero";
import Form from "../organisms/Form/Form";
// Data
import HeroImg from '../assets/img/contactHero.jpg'

export default class ContactUs extends React.Component {
  render() {
    const {heroTitle, form} = this.props;

    return (
      <section className='contact-us-page'>
        <Hero imgSrc={HeroImg} isNarrow='true' title={heroTitle}/>
        <Form/>
      </section>
    )
  }
}

ContactUs.defaultProps = {
  heroTitle: 'Contact'
};

