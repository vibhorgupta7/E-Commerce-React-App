// npm install node-sass
import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import { render } from '@testing-library/react';

const HatsPage = () => {
  return(
    <div>
      <h1>Hats Page</h1>
    </div>
  )
  
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>            {/* whenever a route is being made, the component thta is called is sent 3 parameters: Location, History, Match */}
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
