import {BrowserRouter as Router, Route} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Search from "./routes/Search";

function App() {
  return (
    <div>
      <Router>
        <Layout/>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie/:id" component={Detail} />
        <Route exact path="/search" component={Search} />
      </Router>
    </div>
  );
}

export default App;
