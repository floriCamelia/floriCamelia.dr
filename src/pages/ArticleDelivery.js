import React from 'react';
// Components
import Article from "../organisms/Article/Article";
import Grid from "../organisms/Grid/Grid";
import Image from "../atoms/Image/Image";
// Data
import PrimaryImg from '../assets/img/pages/delivery1.jpg'
import SecondaryImg from '../assets/img/pages/delivery2.jpg'
import TertiaryImg from '../assets/img/pages/delivery3.jpg'
import Quaternary from '../assets/img/pages/delivery4.jpg'

export default class ArticleDelivery extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
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

ArticleDelivery.defaultProps = {
  title: 'Detalii Livrare',
  description: [
    'Flori Camelia livrează buchete de flori, aranjamente florale și cadouri în orașul Drochia și împrejurimi în raza de __km.',
    'Fie că sunteți acasă sau departe, dăruiți celor dragi un buchet de flori superbe pentru a-i surprinde.',
    'Avem flori pentru diverse ocazii, vorbiți cu noi despre ocazia dvs. și împreună vom alege florile potrivite.'
  ],
  footerNotes: '<p>Sunați-ne acum și cereți o comandă <a href=\'tel:\'>+373 676 17 827</a>.</p>'
};
