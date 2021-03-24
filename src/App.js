// npm install node-sass
import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>            {/* whenever a route is being made, the component thta is called is sent 3 parameters: Location, History, Match */}
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
