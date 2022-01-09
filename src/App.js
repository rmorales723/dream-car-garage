import './App.css';
import LandingPage from './components/LandingPage'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import CarsContainer from './components/CarsContainer'
import FormContainer from './components/FormContainer'

function App() {
  return (
    <div className="App">
      <form />
      <Router> 
        <Switch>
        <Route exact path= "/cars/new" component={FormContainer}/>
          <Route exact path= "/cars" component={CarsContainer}/>
          <Route exact path= "/" component={LandingPage}/>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
