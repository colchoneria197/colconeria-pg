import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Navbar from './components/navbar/navbar.jsx'
import Home from './Components/home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <React.Fragment>
          <Switch>
            <Route exact path='/' component={Home} />
            {/* <Route path="*" component={NotFound} /> */}
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
