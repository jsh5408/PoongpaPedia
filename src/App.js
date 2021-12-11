import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./routes/Home";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
