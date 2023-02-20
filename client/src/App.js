import React from 'react';
import Navbar from './compoments/Navigation'
import Footer from './compoments/Footer'
import Login from './compoments/Login'
import Signup from './compoments/Signup'
import UserProfile from './pages/User-Profile'
import Matches from './pages/Search-Dogs'
import Donation from './pages/Donation'
import Chat from './compoments/Chat'
import AddDog from './compoments/Add-dog'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
       <BrowserRouter> 
              <Navbar/>
              <Routes>
                <Route path = "/" element = {<Home/>}/>
                <Route path = "/login" element = {<Login/>}/>
                <Route path = "/signup" element = {<Signup/>}/> 
                <Route path = "/profile" element = {<UserProfile/>}></Route>
                <Route path = "/matches" element = {<Matches/>}/>
                <Route path = "/donation" element = {<Donation/>}/>
                <Route path = "/chat" element = {<Chat/>}/>
                <Route path = "/add-dog" element = {<AddDog/>}/>
              </Routes>
              <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
