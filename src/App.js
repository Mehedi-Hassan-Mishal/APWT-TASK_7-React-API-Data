import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Contact from './Components/Contact';
import ManagerList from './Components/ManagerList';
import Home from './Components/Home';
import ManagerDetails from './Components/ManagerDetails';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/ManagerList">
            <ManagerList></ManagerList>
          </Route>
          <Route path="/managerDetails/:email">
            <ManagerDetails></ManagerDetails>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;