// pages/index.tsx
import React from "react";
import client from "../lib/apolloClient"; // Import your Apollo Client instance
import { useQuery } from "@apollo/client";
import { GET_HELLO, HelloData } from "../lib/queries"; // Import your GraphQL query and type from queries.ts

// const IndexPage: React.FC = () => {
//   const { loading, error, data } = useQuery<HelloData>(GET_HELLO);

//   // if (loading) return <p>Loading...</p>;
//   // if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div>
//       <p>Message from GraphQL API</p>
//     </div>
//   );
// };

export default async function Home() {
  const serverData = await getData();
  console.log("serverData", serverData);
  return (
    <div>
      <h1>Users</h1>

      <h2>Server-side fetched data:</h2>
      <ul>
        {serverData.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <h2>Client-side fetched data:</h2>
      {/* <ul>
        {clientData.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul> */}
    </div>
  );
}

async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const serverData = await response.json();

    return serverData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return empty array in case of error
  }
}
