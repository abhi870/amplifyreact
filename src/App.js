import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ApolloClient, InMemoryCache} from "@apollo/client";
import {gql} from "@apollo/client";

const appClient = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache: new InMemoryCache()
});

appClient.query(
  {
    query: gql`
    query getData{
      data
    }
    `
  }
).then(result => console.log(result));





function App() {
  return (
    <div className="App">
     <h2>Hello Abhishek!!!</h2>
    </div>
  );
}

export default App;
