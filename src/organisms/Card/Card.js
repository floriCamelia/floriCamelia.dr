import React from 'react';
import './Card.scss'
// Components
import Image from "../../atoms/Image/Image";
import CtaPrimary from "../../atoms/CtaPrimary/CtaPrimary";


export default class Card extends React.Component {
  render() {
    const {imgSrc, imgAlt, title, description, cta} = this.props;

    return (
      <div className={`card`}>
        <Image imgSrc={imgSrc} imgAlt={imgAlt} modifier='image--card'/>
        <div className='card__text'>
          {title && <h3>{title}</h3>}
          {description && <p>{description}</p>}
          {cta && <CtaPrimary label={cta.label} url={cta.url} iconClass='fas fa-angle-right'/>}
        </div>
      </div>
    )
  }
}
