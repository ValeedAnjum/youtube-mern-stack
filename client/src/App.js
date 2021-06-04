import Layout from "./components/layout/Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Switch>
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
