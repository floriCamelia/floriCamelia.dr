import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.scss';
//
import Image from "../../atoms/Image/Image";
import LogoImage from "../../assets/img/cameliaLogo.png";
import DividingLine from "../../atoms/DividingLine/DividingLine";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header className='header'>
        <div className='header__wrapper'>
          <div className='header__logo'>
            <Image imgSrc={LogoImage} modifier='image--logo' imgAlt='Flori Camelia Logo'/>
            <p className='header__logo-motto'>Înflorește-ți viața</p>
          </div>
          <DividingLine />
          {/* Navigation */}
          <nav className='menu'>
            <ul className='menu__wrapper'>
              <li>
                <NavLink exact to='/'>Acasă</NavLink>
              </li>
              <li>
                <NavLink to='/servicii'>Servicii</NavLink>
              </li>
              <li>
                <NavLink to='/contact'>Contact</NavLink>
              </li>
              <li>
                <NavLink to='/despre-noi'>Despre Noi</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
