"use strict";
const dbAcess = (account) => {
    if ("adminKey" in account) {
        return true;
    }
    return false;
};
function isFish(animal) {
    return animal.swim !== undefined;
}
function getFood(animal) {
    if (isFish(animal)) {
        animal;
        return "fish Food";
    }
    else {
        animal;
        return "bird Food";
    }
}
