import React from "react";
import { Router, Route } from "react-router-dom";
import Home from "../../pages/HomePage";
import history from "../../history";
import { ProtectedRoute, PublicRoute } from "../../custom.route";
import NotFound from "../../pages/NotFound";
import ServerError from "../../pages/ServerError";
import CheckInfo from "../CheckInfo";
import TestIntro from "../test-level/TestIntro";
import TestPage from "../test-level/TestPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShowingUserInfo from "../user-info/ShowingUserInfo";
import axios from "axios";
import UpdatingUserInfo from "../user-info/UpdatingUserInfo";
import DashBoard from "../dashboard";
import QuestionDetail from "../question-post/QuestionDetail";
import AskingQuestion from "../question-post/asking-question";
import GettingFeedback from "../feedback-post/getting-feedback";
import FeedbackDetail from "../feedback-post/FeedbackDetail";
import PartnerRequest from "../partner-request";
import Notification from "../notification";
import Conversation from "../conversation";
import AdminPage from "../admin";

class App extends React.Component {
  render() {
    axios.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        if (error.response.status === 401) {
          localStorage.removeItem("token");
          history.push("/");
        }
        return error;
      }
    );
    return (
      <Router history={history}>
        <div>
          <PublicRoute exact path={process.env.PUBLIC_URL + "/"} component={Home} />
          <ProtectedRoute exact path={process.env.PUBLIC_URL + "/dashboard"} component={DashBoard} />
          <ProtectedRoute exact path={process.env.PUBLIC_URL + "/check-info"} component={CheckInfo} />
          <ProtectedRoute exact path={process.env.PUBLIC_URL + "/test-intro"} component={TestIntro} />
          <ProtectedRoute exact path={process.env.PUBLIC_URL + "/test-page"} component={TestPage} />
          <ProtectedRoute exact path={process.env.PUBLIC_URL + "/user-info"} component={ShowingUserInfo} />
          <ProtectedRoute
            exact
            path={process.env.PUBLIC_URL + "/user-info/:id"}
            component={ShowingUserInfo}
          />
          <ProtectedRoute
            exact
            path={process.env.PUBLIC_URL + "/update-info"}
            component={UpdatingUserInfo}
          />
          <ProtectedRoute
            exact
            path={process.env.PUBLIC_URL + "/asking-question"}
            component={AskingQuestion}
          />
          <ProtectedRoute
            exact
            path={process.env.PUBLIC_URL + "/getting-feedback"}
            component={GettingFeedback}
          />
          <ProtectedRoute path={process.env.PUBLIC_URL + "/question-detail/:id"} component={QuestionDetail} />
          <ProtectedRoute path={process.env.PUBLIC_URL + "/feedback-detail/:id"} component={FeedbackDetail} />
          <ProtectedRoute path={process.env.PUBLIC_URL + "/partner-request"} component={PartnerRequest} />
          <ProtectedRoute path={process.env.PUBLIC_URL + "/notification"} component={Notification} />
          <ProtectedRoute path={process.env.PUBLIC_URL + "/conversation/:id"} component={Conversation} />
          <ProtectedRoute path={process.env.PUBLIC_URL + "/admin-page"} component={AdminPage}/>
          <Route exact path={process.env.PUBLIC_URL + "/notfound"} component={NotFound} />
          <Route exact path={"/servererror"} component={ServerError} />
          <ToastContainer autoClose={3000} />
        </div>
      </Router>
    );
  }
}

export default App;
