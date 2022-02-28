import React, { Component } from "react";
import { connect } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import User from "./containers/user";
import CharacterDetail from "./containers/characterdetail";
import themeDefault from "./theme-default.jsx";
import "./App.css";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={themeDefault}>
        <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="/user" />
            <Route exact path="/user" component={User} />
            <Route
              exact
              path="/characterDetail/:id"
              render={() => <CharacterDetail />}
            />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeUser: state.activeUser
  };
};

export default connect(mapStateToProps)(App);
