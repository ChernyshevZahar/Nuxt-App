import gql from "graphql-tag"

export const messageQuery = gql`
    query messageQuery {
      items {
        table
        id
      }
    }
`
