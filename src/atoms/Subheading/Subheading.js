import React from 'react';
import './Subheading.scss';

export default class Subheading extends React.Component {
  render() {
  const { subheading } = this.props;
    return (
      <h2 className='subheading'>{subheading}</h2>
    )
  }
}
