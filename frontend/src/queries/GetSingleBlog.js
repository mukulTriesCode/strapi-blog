import { gql } from "@apollo/client";

const GetSinglePost = gql`
  query GetSinglePost($slug: String!) {
    blog(where: { attributes: { slug: $slug } }) {
      data {
        attributes {
          title
          description
          author
          published
          image
          slug
        }
      }
    }
  }
`;

export default GetSinglePost;
