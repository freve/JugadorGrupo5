import './App.css';
import { Navbar } from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Form } from './Components/Form';
import { ListDataSheet } from './Components/ListDataSheet';
import { Example } from './Components/Example';
function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/lesion/listar">
            <Example />
          </Route>
          <Route path="/lesion">
          </Route>
          <Route path="/ficha/listar">
            <ListDataSheet />
          </Route>
          <Route path="/">
            <Form />
          </Route>

        </Switch>
      </div>

    </Router>
  );
}

export default App;
