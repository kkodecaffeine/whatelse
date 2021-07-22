import React from "react";
import ReactDOM from "react-dom";
import { Index } from "./components/Index";

import jquery from 'jquery';
import $ from 'jquery';

class ParentComponent extends React.Component {
  componentDidMount() {
    $(function () {
      alert("test");
    });
  }
  render() {
    return <Index />;
  }
};

ReactDOM.render(<ParentComponent />, document.getElementById("app"));
