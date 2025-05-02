"use client";

import client from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white h-[100dvh] w-[100dvw]">
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </body>
    </html>
  );
}
