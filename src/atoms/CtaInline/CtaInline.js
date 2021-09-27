import React from 'react';

import './CtaInline.scss';

export default class CtaPrimary extends React.Component {
  handleBackBtn() {
    window.history.back();
  }

  render() {
    const {url, label, iconClass} = this.props;
    return (
      <button className='cta-inline' onClick={this.handleBackBtn}><i className={iconClass}></i> {label}</button>
    )
  }
}
