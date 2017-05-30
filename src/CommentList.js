import React, { Component } from 'react';

class CommentList extends Component {
  static defaultProps = {
    list: []
  }
  render() {
    return (
      <div>
        {
          this.props.list.map((c, i) => {
            return (
              <div key={i}>
                <span>{c.userName}: </span>
                <span>{c.comment}</span>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default CommentList;