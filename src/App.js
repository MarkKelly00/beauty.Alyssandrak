import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/main';
import Services from './pages/services';
import Contact from './pages/contact';
import MyLocation from './pages/location';
import Hair from './pages/hair';
import Brows from './pages/brows';
import Events from './pages/events';
import LoadingScreen from './components/loading/loading.component';


export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <React.Fragment>
      {loading === false ? (
      <Router>
        <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/location' component={MyLocation} />
        <Route exact path='/brows' component={Brows} />
        <Route exact path='/events' component={Events} />
        <Route exact path='/hair' component={Hair} />
        </Switch>
      </Router>
      ) : (
        <LoadingScreen />
      )}
    </React.Fragment>
  );
}