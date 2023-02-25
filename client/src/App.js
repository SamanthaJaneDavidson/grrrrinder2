import React from "react";
import Navbar from "./components/Navigation";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserProfile from "./pages/User-Profile";
// import SearchDogs from './pages/Search-Dogs'
import Donation from "./pages/Donation";
import AddDog from "./pages/Add-dog";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Chat from "./components/Chat";
// import UploadWidget from './components/UploadWidget';
// import Chat from './components/Chat'
// import Cloudinary from './pages/Cloudinary';
// import Donation from './pages/Donation';
// import Home from './components/Home';
// import UserProfile from './components/User-Profile';
import './index.css';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Chat />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<UserProfile />}></Route>
          {/* <Route path = "/search-dogs" element = {<SearchDogs/>}/> */}
          <Route path="/donation" element={<Donation />} />
          {/* <Route path = "/chat" element = {<Chat/>}/> */}
          <Route path="/add-dog" element={<AddDog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
