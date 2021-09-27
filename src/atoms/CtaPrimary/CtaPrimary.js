import React from 'react';
import {NavLink} from "react-router-dom";
import './CtaPrimary.scss';

export default class CtaPrimary extends React.Component {
  render() {
    const {url, label, iconClass} = this.props;

    return (
       <NavLink className='cta-primary' to={url}>{label} {iconClass ? <i className={iconClass}></i>: ''}</NavLink>
    )
  }
}
