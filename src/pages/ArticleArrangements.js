import React from 'react';
// Components
import Article from "../organisms/Article/Article";
import Grid from "../organisms/Grid/Grid";
import Image from "../atoms/Image/Image";
// Data
import dataArrangements from '../data/romanian/articles/data-arrangements'
import PrimaryImg from "../assets/img/pages/event1.jpg";
import SecondaryImg from "../assets/img/pages/event2.jpg";
import TertiaryImg from "../assets/img/pages/event3.jpg";
import Quaternary from "../assets/img/pages/event4.jpg";

export default class ArticleArrangements extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <section className='article-page'>
        <Article data={dataArrangements} />
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
