import React from "react";
import "./style.css";
import PageLayout from "../../layout/PageLayout";
import ReactCountdownClock from "react-countdown-clock";
import { levelTestService } from "../../../_services/levelTestService";
import { userService } from '../../../_services/userService';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom'
import Spinner from "../../Spinner";

class TestPage extends React.Component {
  state = {
    levelTest: null,
    rightAnswerNumber: 0,
    level: null,
    testResultClass: 'hidden',
    timerClass: 'show',
  };

  submitForm = () => {
    console.log("submit!1");
    this._form.dispatchEvent(new Event("submit"));
  }

  async componentDidMount() {
    let levelTest = await levelTestService.getRandomTest();
    if (levelTest) {
      this.setState({
        levelTest: levelTest
      });
    }
  }


  renderQuestion = () => {
    if (this.state.levelTest === null) {
      return null;
    }
    if (this.state.levelTest.questions === null) {
      return null;
    }
    return this.state.levelTest.questions.map(q => {
      let audioClass = q.audio === null ? 'hidden' : 'show';
      return (
        <div className="question-block" key={q.id}>
          <h2><strong>Question {this.state.levelTest.questions.indexOf(q) + 1}: </strong>{q.content}</h2>
          <div id="question-audio" className={audioClass}>
          <audio controls>
            <source src={q.audio} type="audio/ogg"/>
            <source src={q.audio} type="audio/mpeg"/>
            Your browser does not support the audio tag.
          </audio>
          </div>
          <label><Field type="radio" component="input" name={`q${q.id}`} value={q.answerOptions[0].id.toString()} />{q.answerOptions[0].content}</label>
          <br />
          <label><Field type="radio" component="input" name={`q${q.id}`} value={q.answerOptions[1].id.toString()} />{q.answerOptions[1].content}</label>
          <br />
          <label><Field type="radio" component="input" name={`q${q.id}`} value={q.answerOptions[2].id.toString()} />{q.answerOptions[2].content}</label>
          <br />
          <label><Field type="radio" component="input" name={`q${q.id}`} value={q.answerOptions[3].id.toString()} />{q.answerOptions[3].content}</label>
          <br />
        </div>
      );
    });
  }

  onSubmit = async (formValues) => {
    console.log("submit!");
    let questionArray = [];
    for (let q in formValues) {
      let questionObject = {};
      questionObject.questionId = q.substr(1, q.length - 1);
      questionObject.answerId = formValues[q];
      questionArray.push(questionObject);
    }
    var response = await userService.updateLevel(questionArray);
    this.handleResponse(response);
  }

  handleResponse = (response) => {
    this.setState({
      rightAnswerNumber: response.rightAnswerNumber,
      level: this.convertIntLevelToStringLevel(response.level),
      testResultClass: 'show',
      timerClass: 'hidden'
    });
    document.getElementById('btn-submit').disabled = true;
    window.scrollTo(0, 0); 
  }

  convertIntLevelToStringLevel(level) {
    switch (level) {
      case 0:
        return 'Beginner'
      case 1:
        return 'Intermediate'
      case 2:
        return 'Advanced'
      default:
        break;
    }
  }

  render() {
    let spinnerDisplay = 'flex';
    let clockState = true;
    if(this.state.levelTest){
      spinnerDisplay = 'none';
      clockState = false;
    }
    return (
      <PageLayout>
        <div id="test-page">
          <h1>Test Level</h1>
          <div id="result-block" className={`card ${this.state.testResultClass}`}>
            <div className="card-header custom-header">
              Test Result
            </div>
            <div className="card-body">
              <p className="card-text">
                <span className="result-text"><strong>Right answer:</strong> {this.state.rightAnswerNumber}</span>
                <span className="result-text"><strong>Your level:</strong> {this.state.level}</span>
              </p>
              <Link to={"/dashboard"} id="btn-redirect" className="btn-lg btn btn-warning" >Explore more</Link>
            </div>
          </div>
          <div id="timer" className={this.state.timerClass}>
            <ReactCountdownClock
              seconds={6}
              color="#fdcb6e"
              alpha={1}
              size={100}
              paused={clockState}
              onComplete={this.submitForm}
            />
          </div>
          <Spinner display={spinnerDisplay} />
          <form id="form-result" onSubmit={this.props.handleSubmit(this.onSubmit)} ref={(el) => { this._form = el; }}>
            {this.renderQuestion()}
            <button id="btn-submit" className="btn btn-lg btn-danger" style={{ fontWeight: 'bold' }} type="submit">Submit</button>
          </form>
        </div>
      </PageLayout>
    );
  }
}

export default reduxForm({
  form: 'levelTest'
})(TestPage);
