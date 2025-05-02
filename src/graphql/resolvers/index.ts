import { emailResolvers } from './email';
import { mergeResolvers } from '@graphql-tools/merge';
import { helloResolvers } from './hello';

export const resolvers = mergeResolvers([emailResolvers, helloResolvers]);