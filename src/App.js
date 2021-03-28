// npm install node-sass
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth } from './firebase/firebase.utils';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser: null       // to store user who signs in  
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){      // whenever a  signin or sighnout is made, state is changed
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {     // inbuilt funciton that gives  us the user from firebase to our app.
      this.setState({ currentUser: user});

    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();     // when user signs out
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>            {/* whenever a route is being made, the component thta is called is sent 3 parameters: Location, History, Match */}
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }

}

export default App;
