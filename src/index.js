// index.js
import './style.css';
import React from "react-dom";
import ReactDOM from 'react-dom/client';
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider,gql } from '@apollo/client';

const client = new ApolloClient( {
    uri: 'https://demo5.temptesting.com/graphql',
    cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
)

//   client
//   .query({
//     query: gql`
//       query GetRecords {
//         records {
//             edges {
//               node {
//                title 
//                recordMeta {
//                 location
//                }
//               }
//             }
//           }
//       }
//     `,
//   })
//   .then((result) => console.log(result));