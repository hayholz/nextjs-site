import { Button } from "@/components/button";
import { Toolbar } from "@/components/toolbar";
import { SignUp } from "@/features/signup";
import Link from "next/link";

const fetchEmails = async () => {
  const res = await fetch("http://localhost:3000/api/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query {
          emails {
            id
            email
          }
        }
      `,
    }),
    cache: "no-store",
  });

  const { data } = await res.json();
  return data.emails;
};

export default async function SignUpPage() {
  const emails = await fetchEmails();

  return (
    <div className="h-full w-full bg-white">
      <Toolbar className="bg-black text-white">
        <Button>
          <Link href="/">Home </Link>
        </Button>
      </Toolbar>
      <SignUp preFetchedEmails={emails} />;
    </div>
  );
}
