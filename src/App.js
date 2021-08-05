import React, { Component } from "react";

import KanyeWest from "./pages/KanyeWest";

import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router>
              <Switch>
                <Route path="/" component={KanyeWest} />
              </Switch>
            </Router>
          </PersistGate>
        </Provider>
      </>
    );
  }
}

export default App;
