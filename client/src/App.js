import { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import PlayingVideo from "./components/playingVideo/PlayingVideo";
import ScrollToTop from "./components/scrollToTop/scrollToTop";
import store from "./store";
import SigninEmail from "./components/auth/signIn/Email";
import SigninPassword from "./components/auth/signIn/Password";
import SignupEmail from "./components/auth/signup/Email";
import SignupPassword from "./components/auth/signup/Password";
import { loadUser } from "./store/actions/authActions";
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ScrollToTop>
          <Layout />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/video/:id" component={PlayingVideo} />
            <Route path="/signin/email" component={SigninEmail} />
            <Route path="/signin/password" component={SigninPassword} />
            <Route path="/signup/email" component={SignupEmail} />
            <Route path="/signup/password" component={SignupPassword} />
          </Switch>
        </ScrollToTop>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
