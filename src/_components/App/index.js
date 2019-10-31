import React from 'react';
import { Router, Route } from 'react-router-dom';
import Home from '../../pages/HomePage';
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
import DashBoard from '../dashboard';
import QuestionDetail from '../question-post/QuestionDetail';
import AskingQuestion from '../question-post/asking-question';
import GettingFeedback from '../feedback-post/getting-feedback';

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
          <ProtectedRoute exact path="/dashboard" component={DashBoard} />
          <ProtectedRoute exact path="/check-info" component={CheckInfo} />
          <ProtectedRoute exact path="/test-intro" component={TestIntro} />
          <ProtectedRoute exact path="/test-page" component={TestPage} />
          <ProtectedRoute exact path="/user-info" component={ShowingUserInfo} />
          <ProtectedRoute exact path="/user-info/:id" component={ShowingUserInfo} />
          <ProtectedRoute exact path="/update-info" component={UpdatingUserInfo} />
          <ProtectedRoute exact path="/asking-question" component={AskingQuestion} />
          <ProtectedRoute exact path="/getting-feedback" component={GettingFeedback} />
          <ProtectedRoute path="/question-detail/:id" component={QuestionDetail} />
          <Route exact path="/notfound" component={NotFound} />
          <Route exact path="/servererror" component={ServerError}/>
          <ToastContainer autoClose={3000} />
        </div>
      </Router>
    );
  }
}

export default App;
