import React from 'react';
import './VideoBlock.scss';

export default class VideoBLock extends React.Component {
  render() {
    const { videoSrc, isLarge, title} = this.props;
    return (
      <div className={`video-block ${isLarge ? 'video-block--large': ''}`}>
        <iframe src={`${videoSrc}?listType=playlist?rel=0`} title={title} width='100%' height='auto' frameBorder='0' allowFullScreen/>
      </div>
    )
  }
}
