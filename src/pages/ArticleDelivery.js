import React from 'react';
// Components
import Article from "../organisms/Article/Article";
import Grid from "../organisms/Grid/Grid";
import Image from "../atoms/Image/Image";
// Data
import dataDelivery from '../data/romanian/articles/data-delivery'
import PrimaryImg from '../assets/img/pages/delivery1.jpg'
import SecondaryImg from '../assets/img/pages/delivery2.jpg'
import TertiaryImg from '../assets/img/pages/delivery3.jpg'
import Quaternary from '../assets/img/pages/delivery4.jpg'

export default class ArticleDelivery extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className='article-page'>
        <Article data={dataDelivery}/>
        <Grid>
          <Image imgSrc={PrimaryImg} imgAlt='' modifier='image--gridCard'/>
          <Image imgSrc={SecondaryImg} imgAlt='' modifier='image--gridCard'/>
          <Image imgSrc={TertiaryImg} imgAlt='' modifier='image--gridCard'/>
          <Image imgSrc={Quaternary} imgAlt='' modifier='image--gridCard'/>
        </Grid>
      </section>
    )
  }
}
