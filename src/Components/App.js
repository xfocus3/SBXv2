import React, { Component, Fragment } from "react";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import Exercices from "./Exercices";
import { exercices, muscules } from "../store";

export default class extends Component {
  state = {
    exercices
  };
  render() {
    return (
      <Fragment>
        <Header />
        <Exercices />
        <Footer muscules={muscules} />
      </Fragment>
    );
  }
}
