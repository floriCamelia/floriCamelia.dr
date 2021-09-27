import React from 'react';
import './Image.scss';

export default class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { imgSrc, imgAlt, modifier} = this.props;

    return (
      <img className={`image ${modifier ? modifier: ''}`} src={imgSrc} alt={imgAlt} />
    )
  }
}
