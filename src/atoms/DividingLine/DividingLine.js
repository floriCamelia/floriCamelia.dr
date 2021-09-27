import React from 'react';
import './DividingLine.scss';

export default class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isFullWidth } = this.props;

    return (
      <hr className={`dividing-line${isFullWidth ? ' dividing-line--full':''}`} />
    )
  }
}
