import React, { Component } from "react";
import postQuery from "../graphql/postQuery";

export default class GetPost extends Component {
  render() {
    return (
      <div>
        <h2>Get a specific post</h2>
        <input
          type="number"
          name="id"
          onChange={this.props.handleChange}
          placeholder="ID"
        />
        <button
          onClick={() => {
            this.props.handleRequest(postQuery(this.props.id));
          }}
        >
          Get Post
        </button>
      </div>
    );
  }
}
