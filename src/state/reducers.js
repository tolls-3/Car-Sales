import * as types from "./actionTypes";

const initialCarState = {
  additionalPrice: 0,
  price: 26395,
  name: "2019 Ford Mustang",
  image:
    "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
  features: []
};

const initialShopState = [
  { id: 1, name: "V-6 engine", price: 1500 },
  { id: 2, name: "Racing detail package", price: 1500 },
  { id: 3, name: "Premium sound system", price: 500 },
  { id: 4, name: "Rear spoiler", price: 250 }
];
//debugger;
export function carReducer(state = initialCarState, action) {
    console.log(state,action)
  switch (action.type) {
    case types.REMOVE_FEATURE:
      return state;

    case types.BUY_ITEM:
      //console.log(state, action);
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.payload.price,
        features: state.features.concat(action.payload)
      };

    default:
      return state;
  }
}

export function storeReducer(state = initialShopState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
