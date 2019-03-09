import React, { Component } from "react";
import createPostMutation from "../graphql/createPostMutation";

export default class CreatePost extends Component {
  render() {
    return (
      <div>
        <h2>Create a post</h2>
        <input
          type="text"
          name="title"
          onChange={this.props.handleChange}
          placeholder="Title"
        />
        <textarea
          type="text"
          name="description"
          onChange={this.props.handleChange}
          placeholder="Description"
        />
        <button
          onClick={() => {
            this.props.handleRequest(
              createPostMutation(this.props.title, this.props.description)
            );
          }}
        >
          Create Post
        </button>
      </div>
    );
  }
}
