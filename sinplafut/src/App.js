import './App.css';
import { Navbar } from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Form } from './Components/Form';
import { ListDataSheet } from './Components/ListDataSheet';
import { FormTeam } from './Components/FormTeam';
import { ListTeam } from './Components/ListTeam';
import { Category } from './Components/Category';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/equipo">
            <FormTeam />
          </Route>
          <Route exact path="/equipo/listar">
            <ListTeam />
          </Route>
          <Route exact path="/ficha/listar">
            <ListDataSheet />
          </Route>
          <Route exact path="/categoria">
            <Category />
          </Route>
          <Route exact path="/">
            <Form />
          </Route>

        </Switch>
      </div>

    </Router>
  );
}

export default App;
