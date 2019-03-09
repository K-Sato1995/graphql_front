import React, { Component } from "react";
import request from "./middleware/";
import postsQuery from "./graphql/postsQuery";

class App extends Component {
  getPosts() {
    request(postsQuery);
  }

  render() {
    return (
      <div className="App">
        <h1>GraphQL API Front</h1>
        {console.log(postsQuery)}
        <button
          onClick={() => {
            this.getPosts();
          }}
        >
          Get Posts
        </button>
      </div>
    );
  }
}

export default App;
