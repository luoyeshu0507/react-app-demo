import React, { Component } from 'react';
import CommentAdd from './CommentAdd';
import CommentList from './CommentList';

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      commentList: []
    }
  }

  handleClick(userName, comment) {
    this.state.commentList.push({
      userName,
      comment
    });
    this.setState({
      commentList: this.state.commentList
    });
  }

  render() {
    return (
      <div>
        <CommentAdd click={ this.handleClick.bind(this) }/>
        <CommentList list={ this.state.commentList }/>
      </div>
    );
  }
}

export default Comment;