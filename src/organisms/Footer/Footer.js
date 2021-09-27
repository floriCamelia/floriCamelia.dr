import React from 'react';
import './Footer.scss';
import DividingLine from "../../atoms/DividingLine/DividingLine";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <DividingLine isFullWidth='true'/>
        <a className='footer__social' href='https://www.facebook.com/cameliafloridrochia' target='_blank'  rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
        <a className='footer__social' href='https://www.instagram.com/bloom_your_life/' target='_blank' rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <p className='description__small'>Ne găsiți pe strada 31 August, Drochia, Moldova<br/>© 2021 Flori Camelia. </p>
      </footer>
    )
  }
}
