import { gql } from 'graphql-tag';

export const emailTypeDefs = gql`
type Email {
  email: String!
  id: ID!
}

type Query {
  emails: [Email!]!
}

type Mutation {
  subscribe(email: String!): Email!
}
`;