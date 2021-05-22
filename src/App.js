import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstContainer from './FirstContainer';
import SecondContainer from './SecondContainer';
import ThirdContainer from './ThirdContainer';
import ForthContainer from './ForthContainer';
import FifthContainer from './FifthContainer';
import Footer from './Footer';
import Signup from './Signup';
import Content from './Content';

function App() {
  return (
    <Router>
      <div className="app" style={{backgroundColor: "#222222",}}>
        <Switch initialRouteName="/">
        <Route path="/Signup">
            <Signup/>
          </Route>
          <Route path="/content">
            <Content/>
          </Route>
          <Route path="/">
            <FirstContainer />
            <SecondContainer/>
            <ThirdContainer/>
            <ForthContainer/>
            <FifthContainer/>
            <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
