import React from 'react';
import './UtilityNav.scss';

export default class UtilityNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className='utility-nav'>
        <div className='utility-nav__row'>
          <ul>
            <li><a href='tel:+37367617827'><i className="fas fa-phone-square-alt"></i><span>+373 676 17 827</span></a></li>
            <li><a href='https://www.facebook.com/cameliafloridrochia' target='_blank'  rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a></li>
            <li><a href='https://www.instagram.com/bloom_your_life/' target='_blank' rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
        <div className='utility-nav__features'>
          <div className='utility-nav__wrapper'>
            <h4><i className="fas fa-gift"></i> Flori - Cadouri - Emoții</h4>
            <h4><i className="far fa-calendar"></i> De Luni - Duminică</h4>
            <h4><i className="fas fa-shipping-fast"></i> Livrare Rapidă</h4>
            <h4><i className="fas fa-user-tie"></i> Profesionalism 100%</h4>
          </div>
        </div>
      </nav>
    )
  }
}
