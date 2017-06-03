import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Index3 extends Component {
  static childContextTypes = {
    store: PropTypes.object
  }

  constructor () {
    super()
    this.state = { store: {themeColor: 'red' }}
  }

  componentWillMount () {
    this.setState({ store: {themeColor: 'green' }});
    setTimeout(() => {
      this.setState({ store: {themeColor: 'red' }});
    }, 4000)
  }

  getChildContext () {
    return { store: this.state.store }
  }

  render () {
    return (
      <div>
        <Header2 />
        <Main2 />
      </div>
    )
  }
}

class Header2 extends Component {
  render () {
    return (
    <div>
      <h2>This is header</h2>
      <Title2 />
    </div>
    )
  }
}

class Main2 extends Component {
  static contextTypes = {
    store: PropTypes.object
  }

  render () {
    return (
    <div>
      <h2 style={{color: this.context.store.themeColor}}>This is main</h2>
      <Content2 />
    </div>
    )
  }
}

class Title2 extends Component {
  render () {
    return (
      <h1>React.js 小书标题</h1>
    )
  }
}

class Content2 extends Component {
  render () {
    return (
    <div>
      <h2>React.js 小书内容</h2>
    </div>
    )
  }
}

export default Index3;

