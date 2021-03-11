import Home from "./components/Home";
// eslint-disable-next-line
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter className="App">
      <Switch>
        <Route component={ Home } path="/" exact />
        {/* <Route component={ Tutorial } path="/tutorials" /> */}
        {/* <Redirect to="/" /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;