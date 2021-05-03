import React, { useState } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import FlagPage from '../FlagPage/FlagPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';
import About from '../About/About';
import Emergency from '../Emergency/Emergency';
import SafeZone from '../SafeZone/SafeZone'

function App(props) {

  const [user, setUser] = useState(userService.getUser())

  function handleSignUpOrLogin() {
    setUser(userService.getUser())
  }

  function handleLogout() {
    userService.logout();
    setUser(null)
  }

  return (
    <div className="App">
      <NavBar user={user} handleLogout={handleLogout} />
      <Switch>
        <Route exact path="/login">
          <LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />
        </Route>
        <Route exact path="/signup">
          <SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />
        </Route>
        <Route exact path="/flagpage/:flag">
          <FlagPage user={user} />
        </Route>
        <Route path="/emergency">
          <Emergency />
        </Route>
        <Route path="/safezone">
          <SafeZone />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/:ownerName">
          <ProfilePage />
        </Route>
        {userService.getUser() ?
          <>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
            </Switch>
          </>
          :
          <Redirect to='/login' />
        }

      </Switch>
    </div>
  );
}

export default withRouter(App);
