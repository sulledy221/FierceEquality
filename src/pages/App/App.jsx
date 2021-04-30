import React, {useState} from 'react';
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
// import Listing from '../Listing/Listing';

function App(props) {

  const [user, setUser] = useState(userService.getUser()) // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like 
  // this  const token = createJWT(user); // where user was the document we created from mongo

  function handleSignUpOrLogin(){
    setUser(userService.getUser()) // getting the user from localstorage decoding the jwt
  }

  function handleLogout(){
    userService.logout();
    setUser({user: null})
  }

  function push (){
    console.log('props', props)
  }

  return (
    <div className="App">
      {/* <div className="App">
      <Listing />
      </div> */}
      <NavBar push={push}/>
      <Switch>
          <Route exact path="/login">
             <LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          <Route exact path="/signup">
             <SignupPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          <Route exact path="/flagpage">
             <FlagPage flag={{name:"QPOC"}}/>
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
          <Route path="/:username">
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
            <Redirect to='/login'/>
          }
  
      </Switch>
    </div>
  );
}

export default withRouter(App);
