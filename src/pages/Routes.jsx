import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';

function Routes() {
  return (
    <div>
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default Routes;
