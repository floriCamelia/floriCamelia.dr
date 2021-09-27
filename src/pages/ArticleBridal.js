import React from 'react';
// Components
import Article from "../organisms/Article/Article";
import Grid from "../organisms/Grid/Grid";
import Image from "../atoms/Image/Image";
// Data
import PrimaryImg from "../assets/img/pages/bridal.jpg";
import SecondaryImg from "../assets/img/pages/bridal1.jpg";
import TertiaryImg from "../assets/img/pages/bridal2.jpg";
import Quaternary from "../assets/img/pages/bridal3.jpg";

export default class ArticleBridal  extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    const {title, description, footerNotes} = this.props;

    return (
      <section className='article-page'>
        <Article title={title} description={description} footerNotes={footerNotes}/>
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
  title: 'Detalii Livrare',
  description: [
    'L-ai întâlnit pe alesul inimii tale și ați stabilit o dată, acuma vin-o la noi să alegeți florile!',
    'Fiecare nuntă are o temă și un stil în toate culorile fierbinți! Care este viziunea ta?',
    'Vin-o la noi să discutăm împreună despre buchetul tău de mireasă! Va fi compus din florile sau din culorile tale preferate, vom confecționa manual pentru tine buchetul la care visezi.',
    'Avem flori superbe pentru nunta ta! Programează o întâlnire cu noi pentru a găsi florile potrivite pentru tine.',
  ],
  footerNotes: '<p>Așteptăm apelul tău la numărul de telefon <a href=\'tel:\'>+373 676 17 827</a> pentru a discuta mai multe detalii.</p>'
};
