import React from 'react';
import './Hero.scss';
// Components
import Image from '../../atoms/Image/Image';
import Heading from "../../atoms/Heading/Heading";
import CtaPrimary from '../../atoms/CtaPrimary/CtaPrimary';

export default class Hero extends React.Component {
  render() {
    const {isNarrow, imgSrc, title, description, cta} = this.props;

    return (
      <div className={`hero${isNarrow ? ' hero--narrow' : ''}`}>
        <Image imgSrc={imgSrc} imgAlt='' modifier='image--hero'/>
        <div className='hero__wrapper'>
          <div className='hero__text'>
            {title && <Heading title={title}/>}
            {description && <p>{description}</p>}
            {cta && <CtaPrimary/>}
          </div>
        </div>
      </div>
    )
  }
}
