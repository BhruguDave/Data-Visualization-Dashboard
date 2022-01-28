import Navbar from './Navbar';
import Home from './Home';
import Activity from './Activity';
import Sleep from './Sleep';
import Conversation from './Conversation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Mobility from './Mobility';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/activity" component={Activity} />
            <Route path="/sleep" component={Sleep} />
            <Route path="/interaction" component={Conversation} />
            <Route path="/mobility" component={Mobility} />
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
