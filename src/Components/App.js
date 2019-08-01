import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import React, { Fragment } from "react";
import Exercices from "./Exercices";

export default props => (
  <Fragment>
    <Header />
    <Exercices />
    <Footer />
  </Fragment>
);
