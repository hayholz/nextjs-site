"use client";

import { useLazyQuery, useMutation } from "@apollo/client";
import client from "@/lib/apolloClient";
import { FC, useState } from "react";
import { EmailObject } from "@/graphql/resolvers/email";
import { Spinner } from "@/components/spinner";
import { SUBSCRIBE_MUTATION } from "@/graphql/mutations/subscribeEmail";
import { EMAILS_QUERY } from "@/graphql/queries/getEmails";

type Props = {
  preFetchedEmails: EmailObject[];
};

type SubscribeData = {
  subscribe: {
    id: string;
    email: string;
  };
};

type SubscribeVars = {
  email: string;
};

type GetEmailsData = {
  emails: EmailObject[];
};

type GetEmailsVars = object;

export const SignUp: FC<Props> = ({ preFetchedEmails }) => {
  const [email, setEmail] = useState("");
  const [subscribe, { data, loading, error }] = useMutation<
    SubscribeData,
    SubscribeVars
  >(SUBSCRIBE_MUTATION);
  const [getEmails, { data: emailsData }] = useLazyQuery<
    GetEmailsData,
    GetEmailsVars
  >(EMAILS_QUERY, {
    client,
    fetchPolicy: "no-cache",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await subscribe({ variables: { email } });
    await getEmails();
    setEmail("");
  };

  return (
    <div className="w-full h-full gap-y-2 text-black items-center justify-center flex flex-col">
      <form onSubmit={handleSubmit}>
        <input
          // NOTE: leaving this commented out so you can submit a invalid email address
          // type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2 mr-2"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2"
        >
          {loading ? <Spinner /> : "Start Free Trail"}
        </button>
        {data && (
          <p className="mt-2">Email Submitted: {data.subscribe.email}</p>
        )}
        {error && <p className="text-red-600 mt-2">Error: {error.message}</p>}
      </form>
      <h4>Existing Emails:</h4>
      <div className="flex flex-col">
        {(emailsData?.emails ?? preFetchedEmails) &&
          (emailsData?.emails ?? preFetchedEmails).map(
            (emailObject: EmailObject) => (
              <p key={`${emailObject.id}-${emailObject.email}`}>
                {emailObject.id} - {emailObject.email}
              </p>
            )
          )}
      </div>
    </div>
  );
};
