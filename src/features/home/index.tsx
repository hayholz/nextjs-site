"use client";

import { gql, useQuery } from "@apollo/client";
import client from "@/lib/apolloClient";
import { Toolbar } from "@/components/toolbar";
import { Button } from "@/components/button";
import Link from "next/link";

const HELLO_QUERY = gql`
  query {
    hello
  }
`;

export function Home() {
  const { loading, error, data } = useQuery(HELLO_QUERY, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <Toolbar>
        <Button>
          <Link href="sign-up">Sign Up </Link>
        </Button>
      </Toolbar>
      <p>{data.hello}</p>
    </div>
  );
}
