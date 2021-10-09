import React from 'react';
import './Colorblock.scss';
// Components
import Image from '../../atoms/Image/Image';
import Subheading from '../../atoms/Subheading/Subheading';
import dataGeneralInfo from "../../data/romanian/global/data-general-info";


export default class Colorblock extends React.Component {
  render() {
    const usePhone = dataGeneralInfo.phone1.action;
    const {imgLeft, title, imgSrc, intro, description, telCTA} = this.props;

    return (
      <div className={`colorblock${imgLeft ? ' colorblock--reverse' : ''}`}>
        <div className='colorblock__text'>
          {title && <Subheading subheading={title}/>}
          {intro && <p>{intro}</p>}
          {description && description.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
          <br/>
          {telCTA && <a className='cta-primary' href={usePhone}>{telCTA}</a>}
        </div>
        <Image imgSrc={imgSrc} modifier='image--colorblock'/>
      </div>
    )
  }
}
