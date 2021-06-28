import './App.css';
import LandingPage from './components/LandingPage'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import CarsContainer from './components/CarsContainer'


function App() {
  return (
    <div className="App">
      <Router> 
        <Switch>
          <Route exact path= "/" component={LandingPage}/>
          <Route exact path= "/cars" component={CarsContainer}/>
          <Route exact path= "/" component={FormContainer}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
