import React, { Component } from "react";
import request from "./middleware/";
import postsQuery from "./graphql/postsQuery";
import postQuery from "./graphql/postQuery";

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      title: "",
      description: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleGet(query) {
    request(query);
  }

  render() {
    return (
      <div className="App">
        <h1>GraphQL API Front</h1>
        <h2>Get Posts</h2>
        <button
          onClick={() => {
            this.handleGet(postsQuery);
          }}
        >
          Get Posts
        </button>
        {console.log(this.state.id)}

        <h2>Get a specific post</h2>
        <input
          type="number"
          name="id"
          onChange={this.handleChange}
          placeholder="ID"
        />
        <button
          onClick={() => {
            this.handleGet(postQuery(this.state.id));
          }}
        >
          Get Post
        </button>
      </div>
    );
  }
}

export default App;
