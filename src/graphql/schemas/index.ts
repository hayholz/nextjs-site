import { emailTypeDefs } from './email';
import gql from 'graphql-tag';
import { helloTypeDefs } from './hello';

export const typeDefs = [
  gql`type Query`, // base empty Query needed for `extend`
  gql`type Mutation`,
  emailTypeDefs,
  helloTypeDefs
];