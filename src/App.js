import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './pages/login';
import Home from './pages/home';

function App() {
   return (
      <Router>
         <div className="container">
            <Route path="/" exact component={Login}/>
            <Route path="/home" component={Home}/>
         </div>
      </Router>
   )
}

export default App;
