// npm install node-sass
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
  

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>            {/* whenever a route is being made, the component thta is called is sent 3 parameters: Location, History, Match */}
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
