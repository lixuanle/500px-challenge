import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PopularPictures from "./pages/PopularPictures";
import './App.css';

class App extends Component {

  render() {
    
    return (
      <Switch>
        <Route exact path='/' component={PopularPictures}/>
        <Route exact path='' render={() => <Redirect to='/1'/>}/>
      </Switch>
    )
  }
}

export default App;
