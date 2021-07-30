import Layout from "./components/layout/Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import PlayingVideo from "./components/playingVideo/PlayingVideo";
import ScrollToTop from "./components/scrollToTop/scrollToTop";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Layout />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/video/:id" component={PlayingVideo} />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
