import React from "react";
import "./style.css";
import PageLayout from "../PageLayout";
import ReactCountdownClock from "react-countdown-clock";
import { levelTestService } from "../../_services/levelTestService";
import { userService } from '../../_services/userService';
import { Field, reduxForm } from 'redux-form';
import { extractTokenService } from '../../_services/extractTokenService';

class TestPage extends React.Component {
  state = {
    levelTest: null
  };

  myCallBack = () => { };

  async componentDidMount() {
    let levelTestResult = await levelTestService.getRandomTest();
    if (levelTestResult.status === 200) {
      this.setState({
        levelTest: levelTestResult.data
      });
    } else {
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
      return (
        <div className="question-block" key={q.id}>
          <h2><strong>Question {this.state.levelTest.questions.indexOf(q)+1}: </strong>{q.content}</h2>
          <label><Field type="radio" component="input"  name={`q${q.id}`} value={q.answerOptions[0].id.toString()} />{q.answerOptions[0].content}</label>
          <br />
          <label><Field type="radio" component="input"  name={`q${q.id}`} value={q.answerOptions[1].id.toString()} />{q.answerOptions[1].content}</label>
          <br />
          <label><Field type="radio" component="input"  name={`q${q.id}`} value={q.answerOptions[2].id.toString()} />{q.answerOptions[2].content}</label>
          <br />
          <label><Field type="radio" component="input"  name={`q${q.id}`} value={q.answerOptions[3].id.toString()} />{q.answerOptions[3].content}</label>
          <br />
        </div>
      );
    });
  }

  onSubmit = async (formValues) => {
    let questionArray = [];
    for(let q in formValues){
      let questionObject = {};
      questionObject.questionId = q.substr(1, q.length - 1);
      questionObject.answerId = formValues[q];
      questionArray.push(questionObject);
    }
    //console.log(questionArray);
    var response = await userService.updateLevel(extractTokenService.extractUserId(), questionArray);
    console.log(response);
  }

  render() {
    return (
      <PageLayout>
        <div id="test-page">
          <h1>Test Level</h1>
          <div id="timer">
            <ReactCountdownClock
              seconds={600}
              color="#fdcb6e"
              alpha={1}
              size={100}
              onComplete={this.myCallBack}
            />
          </div>
          <form id="form-result" onSubmit={this.props.handleSubmit(this.onSubmit)}>
            {this.renderQuestion()}
            <button className="btn btn-lg btn-danger" style={{fontWeight: 'bold'}} type="submit">Submit</button>
          </form>
        </div>
      </PageLayout>
    );
  }
}

export default reduxForm({
  form: 'levelTest'
})(TestPage);
