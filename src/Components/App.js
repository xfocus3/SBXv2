import React, { Component, Fragment } from "react";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import Exercices from "./Exercices";
import { muscles, exercises } from "../store.js";

export default class extends Component {
  state = {
    exercises,
    exercise: {}
  };
  render() {
    return (
      <Fragment>
        <Header />
        <Exercices />
        <Footer muscules={muscles} />
      </Fragment>
    );
  }
}
