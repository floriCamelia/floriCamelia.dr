import React from 'react';
// Components
import Article from "../organisms/Article/Article";
import Grid from "../organisms/Grid/Grid";
import Image from "../atoms/Image/Image";
// Data
import dataBridal from '../data/romanian/articles/data-bridal'
import PrimaryImg from "../assets/img/pages/bridal.jpg";
import SecondaryImg from "../assets/img/pages/bridal1.jpg";
import TertiaryImg from "../assets/img/pages/bridal2.jpg";
import Quaternary from "../assets/img/pages/bridal3.jpg";

export default class ArticleBridal  extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <section className='article-page'>
        <Article data={dataBridal}/>
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

ArticleBridal.defaultProps = {
  title: 'Detalii Buchete de mireasă',
  description: [
    'Fiecare nuntă are o temă și un stil în toate culorile fierbinți! Care este viziunea voastră?',
    'Veniți la noi să discutăm împreună despre buchetul miresei! Va fi compus din florile sau din culorile preferate, vom confecționa manual buchetul la care visați.',
    'Avem flori superbe pentru nunta voastră! Programați o întâlnire cu noi pentru a găsi florile potrivite.',
  ],
  footerNotes: '<p>Așteptăm apelul dvs. la numărul de telefon <a href=\'tel:\'>+373 676 17 827</a> pentru a discuta mai multe detalii.</p>'
};
