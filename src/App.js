import React from "react";
import * as actionCreators from "./state/actionCreators";
import { connect } from "react-redux";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

export function App(props) {
  console.log(props)
  const removeItem = item => {
    // dispatch an action here to remove an item
  };

  const addItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={state.store} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(App);
