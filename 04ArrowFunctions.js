var getHello = function (name, emoji) {
    return "Hello ".concat(name, " ").concat(emoji);
};
console.log(getHello("Anik", "🌄"));
var coldDrinks = ["Maaza", "Frooti", "Fanta", "Limca"];
coldDrinks.map(function (cd) {
    console.log(cd);
    return cd;
});
var showError = function (error) {
    console.log(error);
};
var throwError = function (error) {
    throw new Error(error);
};
