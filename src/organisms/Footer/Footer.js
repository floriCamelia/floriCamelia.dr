import React from 'react';
import './Footer.scss';
import DividingLine from "../../atoms/DividingLine/DividingLine";
//Data
import dataGeneralInfo from '../../data/romanian/global/data-general-info';

export default class Footer extends React.Component {
  render() {
    const {data} = this.props;

    return (
      <footer className='footer'>
        <DividingLine isFullWidth='true'/>
        <a className='footer__social' href={dataGeneralInfo.social.facebook} target='_blank'  rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
        <a className='footer__social' href={dataGeneralInfo.social.insta} target='_blank' rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <p className='description__small'>{data.stringPrimary}<br/>© 2021 Flori Camelia. </p>
      </footer>
    )
  }
}
