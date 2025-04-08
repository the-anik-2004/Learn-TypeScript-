"use strict";
const scores = [];
const products = ["Tshirts", "Books", "Laptops"];
// function getScore<Type>(params:Type):Type{
//     return params
// }
function getScore(params) {
    return params;
}
getScore(4);
getScore("4");
//----Array Generics----
function searchProducts(products) {
    //Do some operations
    return products[0];
}
searchProducts(products);
//---same function in arrow mode----
const searchProductsFaster = (products) => {
    return products[1];
};
searchProductsFaster(products);
const verifyOver = (over, details) => {
    return {
        Over: over,
        Runs: details.runs,
        Wickets: details.wickets
    };
};
console.log(verifyOver(5, {
    runs: 12,
    wickets: 0,
    batsmen: ["K L Rahul", "Virat Kholi"],
    bowler: "Dayle Stane",
    teams: {
        batting: "India",
        balling: "South Africa"
    }
}));
class commercialization {
    constructor() {
        this.cart = [];
    }
    addToCard(product) {
        this.cart.push(product);
        return this.cart;
    }
}
