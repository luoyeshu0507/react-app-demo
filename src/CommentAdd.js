import React, { Component } from 'react';

class CommentAdd extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      userComment: ''
    }
  }

  addComment() {
    this.props.click(this.state.userName, this.state.userComment);
    this.setState({
      userComment: ''
    });
  }

  handleUserNameChange(e) {
    this.setState({
      userName: e.target.value
    });
  }

  handleUserCommentChange(e) {
    this.setState({
      userComment: e.target.value
    });
  }

  render() {
    return (
      <div>
        <div>
          用户名:
          <input onChange={ this.handleUserNameChange.bind(this) } value={this.state.userName} type="text"/>
        </div>
        <div>
          评论:
          <textarea onChange={ this.handleUserCommentChange.bind(this) } value={this.state.userComment}/>
        </div>
        <div>
          <input type="button" value="add" onClick={ this.addComment.bind(this) }/>
        </div>
      </div>
    );
  }
}

export default CommentAdd;