import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Services from './pages/services';

export default function App() {

  return (
    <React.Fragment>
      <Router>
        <Switch>
        <Route path='/' component={Services} />
        {/* <Route path='/services' component={Services} />
        <Route path='/brows' component={Brows} />
        <Route path='/location' component={MyLocation} /> */}
        </Switch>
      </Router>
    </React.Fragment>
  );
}