import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

import Planet from "./components/Planet/Planet";
import NavBar from "./components/NavBar/NavBar";

const Routes = () => {
    return (
            <Switch>
                // get id from here https://api.le-systeme-solaire.net/rest/bodies/?filter%5B%5D=isPlanet,neq,true
                <Route exact path="/" component={() => <Planet id="terre" url="./images/3.png"/>} />
                {/*<Route path="/venus" component={ Venus } />*/}
                {/*<Route path="/mars" component={ Mars } />*/}
                {/*<Route path="/jupiter" component={ Jupiter } />*/}
                {/*<Route path="/saturn" component={ Saturn } />*/}
                {/*<Route path="/uranus" component={ Uranus } />*/}
                {/*<Route path="/neptune" component={ Neptune } />*/}
                {/*<Route component={NotFound} />*/}
            </Switch>
    )}


function App() {
  return (
    <div>
        <Router>
            <NavBar />
            <Routes />
        </Router>
    </div>
  );
}

export default App;
