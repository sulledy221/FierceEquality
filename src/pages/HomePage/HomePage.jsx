import React from 'react';
import './HomePage.css';
import Feed from '../Feed/Feed'




export default function HomePage (props){
    return (
        <div className="App">
          <Switch>
              <Route exact path="/">
                  <Feed />
              </Route>
              <Route exact path="/login">
                 <LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>
              </Route>
              <Route exact path="/signup">
                 <SignupPage handleSignUpOrLogin={handleSignUpOrLogin}/>
              </Route>
          </Switch>
        </div>
      );
    }