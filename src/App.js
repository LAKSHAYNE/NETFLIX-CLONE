import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstContainer from './FirstContainer';
import SecondContainer from './SecondContainer';
import ThirdContainer from './ThirdContainer';



function App() {
  return (
    <Router>
      <div className="app" style={{backgroundColor: "#222222",}}>
        <Switch>
          <Route name="/">
            <FirstContainer />
            <SecondContainer/>
            <ThirdContainer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
