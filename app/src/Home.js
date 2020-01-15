import React, { Component, Fragment } from "react";
import AppNav from "./AppNav";

class Home extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <AppNav />
        <h2>Welcome to easy expense tracking app!</h2>
      </Fragment>
    );
  }
}

export default Home;
