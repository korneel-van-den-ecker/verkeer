import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import ScriptService from './components/features/ScriptService/Signalisatie'

function App() {
  return (
    <Router basename={'/'}>
      <div style={{overflow:"hidden"}}>
        <Route path="/"  component={ScriptService}></Route>
      </div>
    </Router>  
      
  );
}

export default App;
