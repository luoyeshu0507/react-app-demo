import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


const appState = {
  title: {
    text: 'React.js 小书',
    color: 'red',
  },
  content: {
    text: 'React.js 小书内容',
    color: 'blue'
  }
}

function renderApp (appState) {
  renderTitle(appState.title);
  renderContent(appState.content);
}

function stateChange (state, action) {
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      state.title.text = action.text;
      break;
    case 'UPDATE_TITLE_COLOR':
      state.title.color = action.color;
      break;
    default:
      break;
  }
}

function renderTitle (title) {
  const titleDOM = document.getElementById('title')
  titleDOM.innerHTML = title.text
  titleDOM.style.color = title.color
}

function renderContent (content) {
  const contentDOM = document.getElementById('content')
  contentDOM.innerHTML = content.text
  contentDOM.style.color = content.color
}

function createStore(state, stateChange) {
  const listeners = [];
  const subscribe = (listener) => listeners.push(listener);
  const getState = () => state;
  const dispatch = (action) => {
    stateChange(state, action);
    listeners.forEach((listener) => listener());
  }
  return { getState, dispatch, subscribe };
}

const store = createStore(appState, stateChange);
store.subscribe(() => renderApp(store.getState()));

renderApp(store.getState());

store.dispatch({type: 'UPDATE_TITLE_TEXT',text: 'React.js 小书'});
store.dispatch({type: 'UPDATE_TITLE_COLOR', color: 'blue'});
