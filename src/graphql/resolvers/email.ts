import { GraphQLError } from "graphql"

export type EmailObject = {
  email: string
  id: string
}

type Emails = Record<number, EmailObject>

const emails: Emails = {} 

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const emailResolvers = {
  Query: {
    emails: () => {
      return Object.values(emails)
    },
  },
  Mutation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    subscribe: (_: any, { email }: { email: string }) => {
      if (!isValidEmail(email)) {
        throw new GraphQLError('Invalid email address');
      }

      const existingEmails = Object.values(emails).map((e) => e.email)

      if(existingEmails.includes(email)) throw new GraphQLError('Email Already Exists')

      const keys = Object.keys(emails)

      const index = keys.length

      const newEmail = {
        email,
        id: String(index)
      }

      emails[index] = newEmail
      return newEmail;
    },
  },
};