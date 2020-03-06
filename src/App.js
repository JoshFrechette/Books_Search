import  React , { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Search from "./pages/search";
import Saved from "./pages/saved";
import Header from "./components/header";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Search}/>
          <Route path="/saved" component={Saved}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
