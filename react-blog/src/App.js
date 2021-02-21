import Navbar from './Navbar';
import Home from './Home';
//install the react-router and import it the use other pages for the site
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';

function App() {
  return (
    //use the Router for the first step
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* Switch component make sure that only one route shows at any one time and all of our routes going inside this switch component */}
          <Switch>
            <Route exact path="/">
              {/*inside the Route will go the component what we would like to see on this path */}
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
