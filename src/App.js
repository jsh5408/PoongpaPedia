import {BrowserRouter as Router, Route} from "react-router-dom";
//import Layout from "./components/layout/Layout";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Search from "./routes/Search";
import "./App.css";

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie/:id" component={Detail} />
        <Route exact path="/search/:search" component={Search} />
      </Router>
    </div>
  );
}

export default App;
