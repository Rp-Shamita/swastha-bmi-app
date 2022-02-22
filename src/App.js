import './index.css';
import Navbar from './Navbar';
import Content from './Content';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Bmi from './bmi';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className='container'>
        <Switch>
        <Route exact path="/">
          <Content />
        </Route>
        <Route path="/bmi">
          <Bmi />
        </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
