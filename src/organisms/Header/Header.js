import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.scss';
// Components
import Image from "../../atoms/Image/Image";
import DividingLine from "../../atoms/DividingLine/DividingLine";
// Data
import LogoImage from "../../assets/img/cameliaLogo.png";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {data} = this.props;

    return (
      <header className='header'>
        <div className='header__wrapper'>
          <div className='header__logo'>
            <Image imgSrc={LogoImage} modifier='image--logo' imgAlt='Flori Camelia Logo'/>
            <p className='header__logo-motto'>{data.logoMotto}</p>
          </div>
          <DividingLine />
          <nav className='menu'>
            <ul className='menu__wrapper'>
              <li>
                <NavLink exact to={data.exactPath.path}>{data.exactPath.name}</NavLink>
              </li>
              {data.links.map((item, index) => (
                <li key={index}>
                  <NavLink to={item.path}>{item.name}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
