import React from 'react';
import './UtilityNav.scss';
// Data
import dataGeneralInfo from '../../data/romanian/global/data-general-info';
import dataUtility from '../../data/romanian/global/data-utility';

function UtilityNav() {
  return (
    <nav className='utility-nav'>
      <div className='utility-nav__row'>
        <ul>
          <li><a href={dataGeneralInfo.phone1.action}><i className="fas fa-phone-square-alt"></i><span>{dataGeneralInfo.phone1.label}</span></a>
          </li>
          <li><a href={dataGeneralInfo.social.facebook} target='_blank' rel="noopener noreferrer"><i
            className="fab fa-facebook-square"></i></a></li>
          <li><a href={dataGeneralInfo.social.insta} target='_blank' rel="noopener noreferrer"><i
            className="fab fa-instagram"></i></a></li>
        </ul>
      </div>
      <div className='utility-nav__features'>
        <div className='utility-nav__wrapper'>
          {dataUtility.features.map((item, index) => <h4 key={index}><i className={item.icon}></i> {item.text}</h4>)}
        </div>
      </div>
    </nav>
  );
}

export default UtilityNav;
