import gql from "graphql-tag";

export const EMAILS_QUERY = gql`
  query {
    emails {
      id
      email
    }
  }
`;