import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import PlayingVideo from "./components/playingVideo/PlayingVideo";
import ScrollToTop from "./components/scrollToTop/scrollToTop";
import store from "./store";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ScrollToTop>
          <Layout />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/video/:id" component={PlayingVideo} />
          </Switch>
        </ScrollToTop>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
