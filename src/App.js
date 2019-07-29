import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PopularPictures from "./pages/PopularPictures";
import './App.css';

class App extends Component {

  render() {
    
    return (
      <Switch>
        <Route exact path='/' component={PopularPictures}/>
      </Switch>
    )
  }
}

export default App;
