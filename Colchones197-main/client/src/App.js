import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar/navbar.jsx'
import Home from './Components/Home/home';
import Footer from './Components/Footer/footer.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <React.Fragment>
          <Switch>
            <Route exact path='/' component={Home} />
            {/* <Route path="*" component={NotFound} /> */}
          </Switch>
            <Route path="/" component={Footer} />
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
