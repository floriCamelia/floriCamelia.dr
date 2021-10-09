import React from 'react';
// Components
import Hero from "../organisms/Hero/Hero";
import Form from "../organisms/Form/Form";
// Data
import dataContactUs from '../data/romanian/data-contact-us';
import dataGeneralInfo from '../data/romanian/global/data-general-info';
import HeroImg from '../assets/img/contactHero.jpg'

export default class ContactUs extends React.Component {
  render() {

    return (
      <section className='contact-us-page'>
        <Hero imgSrc={HeroImg} isNarrow='true' title={dataContactUs.heroTitle}/>
        <Form data={dataContactUs.info} dataContact={dataGeneralInfo}/>
      </section>
    )
  }
}
