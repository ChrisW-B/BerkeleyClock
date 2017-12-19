import React, { Component } from 'react';

export default class About extends Component {
  state = {
    time: '',
  }

  componentDidMount = () => setInterval(this.updateTime, 1000)

  updateTime = () => this.setState({
    time: new Date()
      .toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' })
      .slice(0, -2),
  });

  render = () => <div className="time">{this.state.time}</div>
};
