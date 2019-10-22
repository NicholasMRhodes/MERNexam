import React, { Component } from 'react';
import './App.css';
import AllPets from './allpets';
import NewPet from './newpet';
import OnePet from './onepet';
import EditPet from './editpet';
import {BrowserRouter, Route} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <h1 className="display-4">Pet Shelter</h1>
          <Route exact path="/" component={AllPets}></Route>
          <Route path="/new" component={NewPet}></Route>
          <Route exact path="/pets/:_id" component={OnePet}></Route>
          <Route path="/pets/:_id/edit" component={EditPet}></Route>
        </>
      </BrowserRouter>
    );
  }
}

export default App;