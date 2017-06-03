import React, { Component } from 'react';

export default (WrappedComponent) => {
  class NewComponent extends Component {
    constructor() {
      super();
      this.state = {
        data: null
      }
    }

    componentWillMount() {
      this.setState({
        data: {
          name: 'lzw',
          age: 18
        }
      });
      console.log(1);
    }

    render() {
      return <WrappedComponent data={this.state.data} />
    }
  }

  return NewComponent;
}