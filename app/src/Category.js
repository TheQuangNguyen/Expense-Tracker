import React, { Component, Fragment } from "react";
import AppNav from "./AppNav";
import App from "./App";

class Category extends Component {
  state = {
    isLoading: true,
    Categories: []
  };

  async componentDidMount() {
    const response = await fetch("/api/categories");
    const body = await response.json();
    this.setState({ Categories: body, isLoading: false });
  }

  render() {
    const { Categories, isLoading } = this.state;
    if (isLoading) {
      return (
        <Fragment>
          <AppNav />
          <div>Loading...</div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <AppNav />
          <div>
            <h2>Categories</h2>
            {Categories.map(category => (
              <div id={category.id}>{category.name}</div>
            ))}
          </div>
        </Fragment>
      );
    }
  }
}

export default Category;
