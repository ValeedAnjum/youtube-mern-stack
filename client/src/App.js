import Layout from "./components/layout/Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import PlayingVideo from "./components/playingVideo/PlayingVideo";
function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/video/:id" component={PlayingVideo} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
