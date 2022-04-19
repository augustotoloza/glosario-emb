import "./App.css";
import { dataGlosario } from "./dataGlosario";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Definition from "./components/Definition";
import Header from "./components/Header";
import TermBox from "./components/TermBox";
import { Helmet } from "react-helmet";
import "./styles/Index.css";

function App() {
  return (
    <Router basename="/glosario">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Glosario de Marketing Digital</title>
      </Helmet>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <TermBox />
          </Route>
          <Route path="/que-es/:urlName">
            <Header />
            <Definition />
            <TermBox />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
