import React from "react";
import * as actionCreators from "./state/actionCreators";
import { connect } from "react-redux";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

export function App(props) {
  //debugger;
  // const removeFeature = item => {
  //   // dispatch an action here to remove an item
  // };

  // const buyItem = item => {
  //   // dipsatch an action here to add an item
  //   props.buyItem(item);
  // };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature ={props.removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.shop} buyItem={props.buyItem}/>
        <Total car={props.car} additionalPrice={props.car.additionalPrice} />
      </div>
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(App);
