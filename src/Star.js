import React, { Component } from 'react';
import './Star.css';

class Star extends Component {
  static defaultProps = {
    likeText: '点赞',
    unlikeText: '取消'
  }

  constructor() {
    super();
    console.log('star constructor');
    this.state = {
      isStard : false
    }
  }

  handleClick() {
    this.setState({
      isStard : !this.state.isStard
    })
  }

  render() {
    console.log('star render');
    return (
      <span className={ 'star ' + (this.state.isStard ? 'on' : 'off') } onClick={ this.handleClick.bind(this) }>{ this.state.isStard ? this.props.unlikeText : this.props.likeText }</span>
    );
  }

  componentWillMount() {
    console.log('star componentWillMount');
  }

  componentDidMount() {
    console.log('star componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('star shouldComponentUpdate');
    return true;
  }

}

export default Star;