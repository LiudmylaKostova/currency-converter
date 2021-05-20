import "./App.css";
import { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./pages/Navigation";

const HomePage = lazy(() =>
  import("./pages/HomePage" /* webpackChunkName: "Home-Page" */)
);
const Converter = lazy(() =>
  import("./pages/Converter" /* webpackChunkName: "Home-Page" */)
);
const Currency = lazy(() =>
  import("./pages/Currency" /* webpackChunkName: "Home-Page" */)
);

const App = () => (
  <>
    <Suspense fallback={<h2> Загружается... </h2>}>
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/converter" component={Converter} />
        <Route path="/currency" component={Currency} />
      </Switch>
    </Suspense>
  </>
);

export default App;
