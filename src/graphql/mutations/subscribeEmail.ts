import gql from "graphql-tag";

export const SUBSCRIBE_MUTATION = gql`
  mutation Subscribe($email: String!) {
    subscribe(email: $email) {
      id
      email
    }
  }
`;