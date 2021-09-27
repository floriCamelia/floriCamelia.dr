import React from 'react';
import './Grid.scss'
// Components

export default class Grid extends React.Component {
  render() {
    const {children, isThreeCol} = this.props;

    return (
      <div className={`grid${isThreeCol ? ' grid--three' : ''}`}>
        {children}
      </div>
    )
  }
}
