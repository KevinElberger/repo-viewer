import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from '../../views/Home/Home';

const MakeRoutes = () => (
  <Router>
    <Route exact path="/" component={Home} />
  </Router>
)

export default MakeRoutes;