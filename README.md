# Next.js GraphQL demo

Next.js 14 (App Router) with a GraphQL API and client in the same app.

## What it contains

- `src/app/api/graphql/route.ts`: Apollo Server (`apollo-server-micro`) with a `hello` query
- `src/app/lib/apolloClient.ts` and `src/app/lib/queries.ts`: Apollo Client and the `GET_HELLO` query
- `src/app/dashboard/page.tsx`: a dashboard page
- Tailwind CSS for styling

## Stack

Next.js 14.2.4, React 18, `@apollo/client` 3.10, `apollo-server-micro` 3.13, GraphQL 16, Tailwind CSS.

## Run

```sh
npm install
npm run dev
```

Open http://localhost:3000. The GraphQL endpoint is `/api/graphql`.

## License

MIT. See [LICENSE](LICENSE).
