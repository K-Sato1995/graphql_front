import React, { Component } from 'react';
import axios from 'axios'

const GET_POSTS = `
  {
    posts {
        id
        title
        description
    }
  }
`;

const baseUrl = 'http://localhost:3000/graphql';

class App extends Component {
  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    axios({
      url: baseUrl,
      method: 'post',
      data: { query: GET_POSTS}
    })
    .then((result) => {
      console.log(result.data)
    });
  }

  render() {
    return (
      <div className="App">
        <h2>GraphQL Front</h2>

      </div>
    );
  }
}

export default App;
