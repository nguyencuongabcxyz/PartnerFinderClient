import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '../HomePage';
import LoginPage from '../LoginPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginPage} />
        </div>
      </Router>
    );
  }
}

export default App;
