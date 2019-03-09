import React, { Component } from "react";
import GetPosts from "./getPosts";
import GetPost from "./getPost";
import CreatePost from "./createPost";
import request from "../middleware/";

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      title: "",
      description: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRequest = this.handleRequest.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleRequest(query) {
    request(query);
  }

  render() {
    return (
      <div className="App">
        <h1>GraphQL API Front</h1>

        {console.log(this.state.id)}
        <GetPosts handleRequest={this.handleRequest} />
        <GetPost
          handleChange={this.handleChange}
          handleRequest={this.handleRequest}
          id={this.state.id}
        />
        <CreatePost
          handleChange={this.handleChange}
          handleRequest={this.handleRequest}
          title={this.state.title}
          description={this.state.description}
        />
      </div>
    );
  }
}

export default App;
