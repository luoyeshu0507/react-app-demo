import React, { Component } from 'react';
import './Star.css';

class Star extends Component {
  static defaultProps = {
    likeText: '点赞',
    unlikeText: '取消'
  }

  constructor() {
    super();
    this.state = {
      isStard : false
    }
  }

  handleClick() {
    console.log(this);
    this.setState({
      isStard : !this.state.isStard
    })
  }

  render() {
    return (
      <span className={ 'star ' + (this.state.isStard ? 'on' : 'off') } onClick={ this.handleClick.bind(this) }>{ this.state.isStard ? this.props.unlikeText : this.props.likeText }</span>
    );
  }
}

export default Star;