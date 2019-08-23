import React from 'react';
import { Router, Route } from 'react-router-dom';
import Home from '../../pages/HomePage';
import DashBoardPage from '../../pages/DashBoardPage';
import history from '../../history';
import { ProtectedRoute, PublicRoute } from '../../custom.route';
import NotFound from '../../pages/NotFound';
import ServerError from '../../pages/ServerError';
import CheckInfo from '../CheckInfo';
import TestIntro from '../TestIntro';
import TestPage from '../TestPage';

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <PublicRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/dashboard" component={DashBoardPage} />
          <ProtectedRoute exact path="/checkinfo" component={CheckInfo} />
          <ProtectedRoute exact path="/testintro" component={TestIntro} />
          <ProtectedRoute exact path="/testpage" component={TestPage} />
          <Route exact path="/notfound" component={NotFound} />
          <Route exact path="/servererror" component={ServerError}/>
        </div>
      </Router>
    );
  }
}

export default App;
