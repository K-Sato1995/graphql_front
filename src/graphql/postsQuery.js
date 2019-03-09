export function postsQuery() {
  return `{
   posts {
     id
     title
     description
   }
 }`;
}
