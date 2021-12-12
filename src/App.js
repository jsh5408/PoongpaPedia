import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./routes/Home";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Router>
        <Layout/>
        <Route exact path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
