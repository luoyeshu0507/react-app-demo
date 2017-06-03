import React, { Component } from 'react';
import WrapToLog from './WrapToLog';

class UserInfo extends Component {
  render() {
    return (
      <div>
        <span>{this.props.data.name}: </span>
        <span>{this.props.data.age}</span>
      </div>
    );
  }
}

let UserInfoWrap = WrapToLog(UserInfo);
export default UserInfoWrap;
