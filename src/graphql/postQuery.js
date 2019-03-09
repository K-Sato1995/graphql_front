export default function postQuery(id) {
  return `{
      post(id: ${id}) {
       id
       title
       description
       comments {
         id
         content
       }
      }
    }`;
}
