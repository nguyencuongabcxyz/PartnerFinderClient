import React from 'react';
import { Router, Route } from 'react-router-dom';
import Home from '../../pages/HomePage';
import DashBoardPage from '../../pages/DashBoardPage';
import history from '../../history';
import { ProtectedRoute, PublicRoute } from '../../custom.route';
import NotFound from '../../pages/NotFound';
import ServerError from '../../pages/ServerError';
import CheckInfo from '../CheckInfo';
import TestIntro from '../test-level/TestIntro';
import TestPage from '../test-level/TestPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShowingUserInfo from '../user-info/ShowingUserInfo';
import axios from 'axios';
import UpdatingUserInfo from '../user-info/UpdatingUserInfo';
import QuestionManagement from '../question-management';

class App extends React.Component {
  render() {
    axios.interceptors.response.use(response => {
      return response;
    }, error => {
      if(error.response.status === 401){
        localStorage.removeItem('token');
        history.push("/");
      }
      return error;
    });
    return (
      <Router history={history}>
        <div>
          <PublicRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/dashboard" component={DashBoardPage} />
          <ProtectedRoute exact path="/checkinfo" component={CheckInfo} />
          <ProtectedRoute exact path="/testintro" component={TestIntro} />
          <ProtectedRoute exact path="/testpage" component={TestPage} />
          <ProtectedRoute exact path="/userinfo" component={ShowingUserInfo} />
          <ProtectedRoute exact path="/userinfo/:id" component={ShowingUserInfo} />
          <ProtectedRoute exact path="/updateinfo" component={UpdatingUserInfo} />
          <ProtectedRoute path="/asking-question" component={QuestionManagement} />
          <Route exact path="/notfound" component={NotFound} />
          <Route exact path="/servererror" component={ServerError}/>
          <ToastContainer autoClose={3000} />
        </div>
      </Router>
    );
  }
}

export default App;
