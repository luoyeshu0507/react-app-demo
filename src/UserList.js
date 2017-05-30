import React, { Component } from 'react';
import './UserList.css';

class UserList extends Component {
  render() {
  	const users = [
      { username: 'Jerry', age: 21, gender: 'male' },
      { username: 'Tomy', age: 22, gender: 'male' },
      { username: 'Lily', age: 19, gender: 'female' },
      { username: 'Lucy', age: 20, gender: 'female' }
    ]
    return (
      <div>
        { users.map((user, i) => {
          return (
            <div key={i}>
              <div>{ user.username }</div>
              <div>{ user.age }</div>
              <div>{ user.gender }</div>
            </div>
          );
        }) }
      </div>
    );
  }
}

export default UserList;
