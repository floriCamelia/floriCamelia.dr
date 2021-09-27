import React from 'react';
import './Heading.scss';

export default class Heading extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <h1 className={`heading `}>{title}</h1>
    )
  }
}
