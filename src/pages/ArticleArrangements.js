import React from 'react';
// Components
import Article from "../organisms/Article/Article";
import Grid from "../organisms/Grid/Grid";
import Image from "../atoms/Image/Image";
// Data
import PrimaryImg from "../assets/img/pages/event1.jpg";
import SecondaryImg from "../assets/img/pages/event2.jpg";
import TertiaryImg from "../assets/img/pages/event3.jpg";
import Quaternary from "../assets/img/pages/event4.jpg";

export default class ArticleArrangements extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    const {title, description, footerNotes} = this.props;

    return (
      <section className='article-page'>
        <Article title={title} description={description} footerNotes={footerNotes} />
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

ArticleArrangements.defaultProps = {
  title: 'Detalii Aranjamente Florale',
  description: [
    'Armonie în toate detaliile...',
    'Indiferent de evenimentul pe care îl aveți în minte, echipa noastră dedicată va lucra îndeaproape cu dvs. pentru a crea decorarea florală a viselor dvs.',
    'Echipa Flori Camelia se angajează să creeze compoziții florale care să vă pună în valoare evenimentul special.',
    'Cu experiența noastră în proiectarea a numeroase evenimente, suntem flexibili și plini de resurse în setul nostru de competențe pentru a vă face evenimentul cu adevărat memorabil cu serviciul nostru complet de proiectare.',
  ],
  footerNotes: '<p>Apelați numărul de telefon <a href=\'tel:\'>+373 676 17 827</a> pentru a discuta mai multe detalii sau a stabili o întâlnire.</p>'
};
