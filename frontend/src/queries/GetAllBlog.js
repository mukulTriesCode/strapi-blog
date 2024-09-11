import { gql } from "@apollo/client";

const GetAllBlog = gql`
  query Blogs {
    blogs {
      data {
        id
        attributes {
          title
          description
          author
          published
          slug
          image
        }
      }
    }
  }
`;

export default GetAllBlog;