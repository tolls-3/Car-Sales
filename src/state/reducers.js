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

export function carReducer(state = initialCarState, action) {
  //console.log(action)
  switch (action.types) {
    case types.BUY_ITEM:
      return {};
    case types.REMOVE_FEATURE:
      return {};
    default:
      return state;
  }
}

export function storeReducer(state = initialShopState, action) {
  switch (action.types) {
    default:
      return state;
  }
}
