Hayden Holzhausers Lennar Application

## Getting Started

First, install dependencies

```bash
yarn
```

Second, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Open the Apollo Client at [http://localhost:4000](http://localhost:4000)

## Briefly describe how you would structure a table to store these emails in a real SQL-based database (no implementation required).

If I just wanted a table to store these emails, I'd simply make a `user-emails` table that has a forgein key referencing the users id (assuming this exists in a existing table) and then a column called `email` that uses a char type. If there was PII and we need to encrpt this data we could do that.

## Thank You

This was a fun little project to throw together and really appreciate the teams time looking over it!
