// queries.ts
import { gql } from '@apollo/client';

export const GET_HELLO = gql`
  query {
    hello
  }
`;

export interface HelloData {
  hello: string;
}
