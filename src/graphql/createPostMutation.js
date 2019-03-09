export default function createPostMutation(title, description) {
  return `mutation {
    createPost(
      input:{
        title: ${title}
        description: ${description}
      }
    ){
      post {
        id
        title
        description
      }
    }
  }`;
}
