import React, { Component } from 'react';

export default class Slideshow extends Component {

  componentDidMount = () => {
    setInterval(this.refreshFrame, 1000 * 60 * 30); // every half hour
  }

  setRef = (self) => {
    this.iframe = self;
  }

  refreshFrame = () => {
    this.iframe.src += '';
  }

  render = () => (
    <iframe
      ref={this.setRef}
      title="Slideshow"
      id="presentFrame"
      src="https://docs.google.com/presentation/d/15UmUDHGWnhLkJCVcv9lMfk9p97i5q3s4HUp9kCIA2SI/embed?start=true&loop=true&delayms=60000"
      frameBorder="0"
      width="100%"
      height="100%"
      allowFullScreen="true"
      mozallowfullscreen="true"
      webkitallowfullscreen="true"
    />
  );
}
