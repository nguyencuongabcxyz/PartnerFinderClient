import React from "react";
import "./style.css";
import PageLayout from "../PageLayout";
import ReactCountdownClock from "react-countdown-clock";
import { levelTestService } from "../../_services/levelTestService";
import { Field, reduxForm } from 'redux-form';

class TestPage extends React.Component {
  state = {
    levelTest: null
  };

  myCallBack = () => {};

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
    if(this.state.levelTest === null){
        return null;
    }
    if(this.state.levelTest.questions === null){
        return null;
    } 
    return this.state.levelTest.questions.map(q => {
      return (
        <div className="question-block" key={q.id}>
          <h2>{q.content}</h2>
          <label>{q.answerOptions[0].content}</label>
          <input type="radio" name={q.id} value={q.answerOptions[0].id} />
          <Field name={q.id} />
          <br />
          <label>{q.answerOptions[1].content}</label>
          <input type="radio" name={q.id} value={q.answerOptions[1].id} />
          <br />
          <label>{q.answerOptions[2].content}</label>
          <input type="radio" name={q.id} value={q.answerOptions[2].id} />
          <br />
          <label>{q.answerOptions[3].content}</label>
          <input type="radio" name={q.id} value={q.answerOptions[3].id} />
          <br />
        </div>
      );
    });
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
              size={300}
              onComplete={this.myCallBack}
            />
          </div>
          <div>{this.renderQuestion()}</div>
        </div>
      </PageLayout>
    );
  }
}

export default TestPage;
