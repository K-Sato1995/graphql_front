import React, { Component } from "react";
import postsQuery from "../graphql/postsQuery";

export default class GetPosts extends Component {
  render() {
    return (
      <div>
        <h2>Get Posts</h2>
        <button
          onClick={() => {
            this.props.handleRequest(postsQuery);
          }}
        >
          Get Posts
        </button>
      </div>
    );
  }
}
