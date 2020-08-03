import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Signalisatie from './components/features/ScriptService/Signalisatie'

function App() {
  return (
    <Router basename={'/'}>
      <div style={{overflow:"hidden"}}>
        <Route path="/"  component={Signalisatie}></Route>
      </div>
    </Router>  
      
  );
}

export default App;
