import React from 'react';
import { Router, Route } from 'react-router-dom';
import Home from '../HomePage';
import LoginPage from '../LoginPage';
import DashBoardPage from '../DashBoardPage';
import history from '../../history';

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/dashboard" component={DashBoardPage} />
        </div>
      </Router>
    );
  }
}

export default App;
