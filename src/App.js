import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Admin from './components/Admin/Admin/Admin';
import Booking from './components/Dashboard/Booking/Booking/Booking';
import Orders from './components/Dashboard/Booking/Orders/Orders';
import Review from './components/Home/Review/Review';
import AllUsers from './components/Dashboard/AllUsers/AllUsers';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import ManageServices from './components/Dashboard/ManageServices/ManageServices';

export const UserContext = createContext();

function App() {
  let [loggedInUser, setLoggedInUser] = useState({
    isSignedIn : false,
    userName: '',
    role: 'user',
    email: ''
  });


  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute >
          <PrivateRoute path='/dashboard'>
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path='/booking/:id'>
            <Booking></Booking>
          </PrivateRoute>
          <PrivateRoute path="/order">
            <Orders></Orders>
          </PrivateRoute>
          <PrivateRoute path="/allUser">
            <AllUsers></AllUsers>
          </PrivateRoute>
          <PrivateRoute path='/review'>
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path='/addAdmin'>
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path='/deleteEvent'>
            <ManageServices></ManageServices>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
