import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Router>
        <Layout/>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie/:id" component={Detail} />
      </Router>
    </div>
  );
}

export default App;
