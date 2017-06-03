import React, {Component} from 'react';
import PropTypes from 'prop-types';

function createStore (reducer) {
  let state = null
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach((listener) => listener())
  }
  return { getState, dispatch, subscribe }
}

const themeReducer = (state, action) => {
  if (!state) return {
    themeColor: 'red'
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    default:
      return state
  }
}

const store = createStore(themeReducer);

class Index2 extends Component {
  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext () {
    return { store }
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

export default Index2;

