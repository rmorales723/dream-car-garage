import './App.css';
import LandingPage from './components/LandingPage'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router> 
        <Switch>
          <Route exact path= "/" component={LandingPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
