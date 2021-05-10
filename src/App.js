import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstContainer from './FirstContainer';


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route name="/">
            <FirstContainer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
