// import React from "react";
import * as React from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import { BrowserRouter ,Router, Route, Link, Routes } from 'react-router-dom';
import Navbar from "./Navbar"
import Users from "./Users"
import UserCreate from "./UserCreate"
import UserUpdate from './UserUpdate'


export default function App() {
  return (

    // <Router>

    //   <Navbar />
    //   <Users />
    //   <UserCreate />
    // </Router>

    // <Router>
    //   <Navbar />
    //   <div>
    //     <Routes>
    //       <Route exact path='/'>
    //         <Users />
    //       </Route>
    //       <Route path='/UserCreate'>
    //         <UserCreate />
    //       </Route>
    //     </Routes>
    //   </div>
    // </Router>

    <Router>
      <Navbar />
        <Routes>
          
          <Route exact path='/react-crud' element={ <Users /> } />
          <Route path='/create' element={ <UserCreate /> } />
          <Route path='/update/:id' element={ <UserUpdate /> } />
          {/* <Route exact path='/' component={Users} />
          <Route path='/create' component={UserCreate} /> */}
        </Routes>
     </Router>

  );
}


// function Users() {
//   return <h2>Users</h2>;
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }