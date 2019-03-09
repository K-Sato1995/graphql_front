const postsQuery = `{
   posts {
     id
     title
     description
     comments {
       id
       content
     }
   }
 }`;

export default postsQuery;
