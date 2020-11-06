import logo from './logo.svg';
import './App.css';
import Menu from './componets/Menu';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './modules/Home';
import SamplePage from './modules/SamplePage';
import LoginPage from './modules/LoginPage';
import Contact from './modules/Contact';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route path={'/samplePage'} component={SamplePage}/>
          <Route path={'/login'} component={LoginPage} />
          <Route path={'/contact'} component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
